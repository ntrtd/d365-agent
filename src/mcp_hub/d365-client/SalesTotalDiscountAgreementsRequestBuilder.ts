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
import { SalesTotalDiscountAgreements } from './SalesTotalDiscountAgreements';

/**
 * Request builder class for operations supported on the {@link SalesTotalDiscountAgreements} entity.
 */
export class SalesTotalDiscountAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTotalDiscountAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTotalDiscountAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTotalDiscountAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTotalDiscountAgreements<T>, T> {
    return new GetAllRequestBuilder<SalesTotalDiscountAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesTotalDiscountAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTotalDiscountAgreements`.
   */
  create(
    entity: SalesTotalDiscountAgreements<T>
  ): CreateRequestBuilder<SalesTotalDiscountAgreements<T>, T> {
    return new CreateRequestBuilder<SalesTotalDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTotalDiscountAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTotalDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesTotalDiscountAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `SalesTotalDiscountAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesTotalDiscountAgreements<T>, T> {
    return new GetByKeyRequestBuilder<SalesTotalDiscountAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTotalDiscountAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTotalDiscountAgreements`.
   */
  update(
    entity: SalesTotalDiscountAgreements<T>
  ): UpdateRequestBuilder<SalesTotalDiscountAgreements<T>, T> {
    return new UpdateRequestBuilder<SalesTotalDiscountAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTotalDiscountAgreements`.
   * @param dataAreaId Key property. See {@link SalesTotalDiscountAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesTotalDiscountAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTotalDiscountAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<SalesTotalDiscountAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTotalDiscountAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTotalDiscountAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTotalDiscountAgreements<T>
  ): DeleteRequestBuilder<SalesTotalDiscountAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<SalesTotalDiscountAgreements<T>, T> {
    return new DeleteRequestBuilder<SalesTotalDiscountAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesTotalDiscountAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
