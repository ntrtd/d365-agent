/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { SalesLineDiscountAgreements } from './SalesLineDiscountAgreements';

/**
 * Request builder class for operations supported on the {@link SalesLineDiscountAgreements} entity.
 */
export class SalesLineDiscountAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesLineDiscountAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `SalesLineDiscountAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `SalesLineDiscountAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<SalesLineDiscountAgreements<T>, T> {
    return new GetAllRequestBuilder<SalesLineDiscountAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesLineDiscountAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesLineDiscountAgreements`.
   */
  create(
    entity: SalesLineDiscountAgreements<T>
  ): CreateRequestBuilder<SalesLineDiscountAgreements<T>, T> {
    return new CreateRequestBuilder<SalesLineDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesLineDiscountAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesLineDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesLineDiscountAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `SalesLineDiscountAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesLineDiscountAgreements<T>, T> {
    return new GetByKeyRequestBuilder<SalesLineDiscountAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesLineDiscountAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesLineDiscountAgreements`.
   */
  update(
    entity: SalesLineDiscountAgreements<T>
  ): UpdateRequestBuilder<SalesLineDiscountAgreements<T>, T> {
    return new UpdateRequestBuilder<SalesLineDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesLineDiscountAgreements`.
   * @param dataAreaId Key property. See {@link SalesLineDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesLineDiscountAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesLineDiscountAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<SalesLineDiscountAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesLineDiscountAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesLineDiscountAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: SalesLineDiscountAgreements<T>
  ): DeleteRequestBuilder<SalesLineDiscountAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<SalesLineDiscountAgreements<T>, T> {
    return new DeleteRequestBuilder<SalesLineDiscountAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesLineDiscountAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
