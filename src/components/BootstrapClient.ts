'use client';

import { useEffect } from 'react';

export default function BootstrapClient(): null {

    useEffect(() => {
        // @ts-expect-error  test
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
                console.log("Bootstrap JavaScript özellikleri yüklendi");
            })
            .catch(err => console.error("Bootstrap yüklenirken bir hata oluştu:", err));
    }, []);

    return null;
}
