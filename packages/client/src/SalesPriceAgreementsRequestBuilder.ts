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
import { SalesPriceAgreements } from './SalesPriceAgreements';

/**
 * Request builder class for operations supported on the {@link SalesPriceAgreements} entity.
 */
export class SalesPriceAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesPriceAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `SalesPriceAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `SalesPriceAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<SalesPriceAgreements<T>, T> {
    return new GetAllRequestBuilder<SalesPriceAgreements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesPriceAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesPriceAgreements`.
   */
  create(
    entity: SalesPriceAgreements<T>
  ): CreateRequestBuilder<SalesPriceAgreements<T>, T> {
    return new CreateRequestBuilder<SalesPriceAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesPriceAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesPriceAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesPriceAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `SalesPriceAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesPriceAgreements<T>, T> {
    return new GetByKeyRequestBuilder<SalesPriceAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesPriceAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesPriceAgreements`.
   */
  update(
    entity: SalesPriceAgreements<T>
  ): UpdateRequestBuilder<SalesPriceAgreements<T>, T> {
    return new UpdateRequestBuilder<SalesPriceAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesPriceAgreements`.
   * @param dataAreaId Key property. See {@link SalesPriceAgreements.dataAreaId}.
   * @param recordId Key property. See {@link SalesPriceAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesPriceAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<SalesPriceAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesPriceAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesPriceAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: SalesPriceAgreements<T>
  ): DeleteRequestBuilder<SalesPriceAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<SalesPriceAgreements<T>, T> {
    return new DeleteRequestBuilder<SalesPriceAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesPriceAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
