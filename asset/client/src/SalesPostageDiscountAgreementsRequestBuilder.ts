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
import { SalesPostageDiscountAgreements } from './SalesPostageDiscountAgreements';

/**
 * Request builder class for operations supported on the {@link SalesPostageDiscountAgreements} entity.
 */
export class SalesPostageDiscountAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesPostageDiscountAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `SalesPostageDiscountAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `SalesPostageDiscountAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<SalesPostageDiscountAgreements<T>, T> {
    return new GetAllRequestBuilder<SalesPostageDiscountAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesPostageDiscountAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesPostageDiscountAgreements`.
   */
  create(
    entity: SalesPostageDiscountAgreements<T>
  ): CreateRequestBuilder<SalesPostageDiscountAgreements<T>, T> {
    return new CreateRequestBuilder<SalesPostageDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesPostageDiscountAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesPostageDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesPostageDiscountAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `SalesPostageDiscountAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesPostageDiscountAgreements<T>, T> {
    return new GetByKeyRequestBuilder<SalesPostageDiscountAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesPostageDiscountAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesPostageDiscountAgreements`.
   */
  update(
    entity: SalesPostageDiscountAgreements<T>
  ): UpdateRequestBuilder<SalesPostageDiscountAgreements<T>, T> {
    return new UpdateRequestBuilder<SalesPostageDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesPostageDiscountAgreements`.
   * @param dataAreaId Key property. See {@link SalesPostageDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesPostageDiscountAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesPostageDiscountAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<SalesPostageDiscountAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesPostageDiscountAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesPostageDiscountAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: SalesPostageDiscountAgreements<T>
  ): DeleteRequestBuilder<SalesPostageDiscountAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<SalesPostageDiscountAgreements<T>, T> {
    return new DeleteRequestBuilder<SalesPostageDiscountAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesPostageDiscountAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
