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
import { SalesMultiLineDiscountAgreements } from './SalesMultiLineDiscountAgreements';

/**
 * Request builder class for operations supported on the {@link SalesMultiLineDiscountAgreements} entity.
 */
export class SalesMultiLineDiscountAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesMultiLineDiscountAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `SalesMultiLineDiscountAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `SalesMultiLineDiscountAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<SalesMultiLineDiscountAgreements<T>, T> {
    return new GetAllRequestBuilder<SalesMultiLineDiscountAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesMultiLineDiscountAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesMultiLineDiscountAgreements`.
   */
  create(
    entity: SalesMultiLineDiscountAgreements<T>
  ): CreateRequestBuilder<SalesMultiLineDiscountAgreements<T>, T> {
    return new CreateRequestBuilder<SalesMultiLineDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesMultiLineDiscountAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesMultiLineDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesMultiLineDiscountAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `SalesMultiLineDiscountAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesMultiLineDiscountAgreements<T>, T> {
    return new GetByKeyRequestBuilder<SalesMultiLineDiscountAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesMultiLineDiscountAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesMultiLineDiscountAgreements`.
   */
  update(
    entity: SalesMultiLineDiscountAgreements<T>
  ): UpdateRequestBuilder<SalesMultiLineDiscountAgreements<T>, T> {
    return new UpdateRequestBuilder<SalesMultiLineDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesMultiLineDiscountAgreements`.
   * @param dataAreaId Key property. See {@link SalesMultiLineDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesMultiLineDiscountAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesMultiLineDiscountAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<SalesMultiLineDiscountAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesMultiLineDiscountAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesMultiLineDiscountAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: SalesMultiLineDiscountAgreements<T>
  ): DeleteRequestBuilder<SalesMultiLineDiscountAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<SalesMultiLineDiscountAgreements<T>, T> {
    return new DeleteRequestBuilder<SalesMultiLineDiscountAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesMultiLineDiscountAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
