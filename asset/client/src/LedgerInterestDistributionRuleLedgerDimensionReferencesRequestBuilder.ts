/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { LedgerInterestDistributionRuleLedgerDimensionReferences } from './LedgerInterestDistributionRuleLedgerDimensionReferences';

/**
 * Request builder class for operations supported on the {@link LedgerInterestDistributionRuleLedgerDimensionReferences} entity.
 */
export class LedgerInterestDistributionRuleLedgerDimensionReferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  LedgerInterestDistributionRuleLedgerDimensionReferences<T>,
  T
> {
  /**
   * Returns a request builder for querying all `LedgerInterestDistributionRuleLedgerDimensionReferences` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerInterestDistributionRuleLedgerDimensionReferences` entities.
   */
  getAll(): GetAllRequestBuilder<
    LedgerInterestDistributionRuleLedgerDimensionReferences<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LedgerInterestDistributionRuleLedgerDimensionReferences<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerInterestDistributionRuleLedgerDimensionReferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerInterestDistributionRuleLedgerDimensionReferences`.
   */
  create(
    entity: LedgerInterestDistributionRuleLedgerDimensionReferences<T>
  ): CreateRequestBuilder<
    LedgerInterestDistributionRuleLedgerDimensionReferences<T>,
    T
  > {
    return new CreateRequestBuilder<
      LedgerInterestDistributionRuleLedgerDimensionReferences<T>,
      T
    >(this.entityApi, entity);
  }
}
