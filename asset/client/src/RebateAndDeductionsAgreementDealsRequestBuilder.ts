/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { RebateAndDeductionsAgreementDeals } from './RebateAndDeductionsAgreementDeals';

/**
 * Request builder class for operations supported on the {@link RebateAndDeductionsAgreementDeals} entity.
 */
export class RebateAndDeductionsAgreementDealsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAndDeductionsAgreementDeals<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAndDeductionsAgreementDeals` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAndDeductionsAgreementDeals` entities.
   */
  getAll(): GetAllRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T> {
    return new GetAllRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RebateAndDeductionsAgreementDeals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAndDeductionsAgreementDeals`.
   */
  create(
    entity: RebateAndDeductionsAgreementDeals<T>
  ): CreateRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T> {
    return new CreateRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RebateAndDeductionsAgreementDeals` entity based on its keys.
   * @param dealNumber Key property. See {@link RebateAndDeductionsAgreementDeals.dealNumber}.
   * @returns A request builder for creating requests to retrieve one `RebateAndDeductionsAgreementDeals` entity based on its keys.
   */
  getByKey(
    dealNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T> {
    return new GetByKeyRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T>(
      this.entityApi,
      { DealNumber: dealNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAndDeductionsAgreementDeals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAndDeductionsAgreementDeals`.
   */
  update(
    entity: RebateAndDeductionsAgreementDeals<T>
  ): UpdateRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T> {
    return new UpdateRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsAgreementDeals`.
   * @param dealNumber Key property. See {@link RebateAndDeductionsAgreementDeals.dealNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsAgreementDeals`.
   */
  delete(
    dealNumber: string
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsAgreementDeals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsAgreementDeals` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAndDeductionsAgreementDeals<T>
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T>;
  delete(
    dealNumberOrEntity: any
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T> {
    return new DeleteRequestBuilder<RebateAndDeductionsAgreementDeals<T>, T>(
      this.entityApi,
      dealNumberOrEntity instanceof RebateAndDeductionsAgreementDeals
        ? dealNumberOrEntity
        : { DealNumber: dealNumberOrEntity! }
    );
  }
}
