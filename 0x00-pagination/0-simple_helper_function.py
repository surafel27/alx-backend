#!/usr/bin/env python3
'''Simple helper function'''


def index_range(page, page_size):
    '''simple range function takes page and page_size'''
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
