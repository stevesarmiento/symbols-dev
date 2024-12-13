'use client'
import IconsList from '@/components/IconsList';
import { useCallback, useEffect, useState } from 'react';
import * as Icons from 'symbols-react';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'next/navigation';

const ICONS_PER_PAGE = 50;

export default function DashboardPage() {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search') || '';
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '200px'
    });

    const getFilteredIcons = useCallback(() => {
        const filteredIcons = Object.entries(Icons)
            .filter(([name]) => 
                name.startsWith('Icon') && 
                (!searchTerm || name.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            
        return filteredIcons.slice(0, page * ICONS_PER_PAGE);
    }, [searchTerm, page]);

    useEffect(() => {
        if (inView) {
            setPage(p => p + 1);
        }
    }, [inView]);

    return (
        <div className="justify-center items-center hide-scrollbar">
            <IconsList 
                filteredIcons={getFilteredIcons()} 
                loadMoreRef={ref}
            />
        </div>
    );
}