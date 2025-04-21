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
import { PurchasePriceAgreements } from './PurchasePriceAgreements';

/**
 * Request builder class for operations supported on the {@link PurchasePriceAgreements} entity.
 */
export class PurchasePriceAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchasePriceAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `PurchasePriceAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `PurchasePriceAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<PurchasePriceAgreements<T>, T> {
    return new GetAllRequestBuilder<PurchasePriceAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchasePriceAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchasePriceAgreements`.
   */
  create(
    entity: PurchasePriceAgreements<T>
  ): CreateRequestBuilder<PurchasePriceAgreements<T>, T> {
    return new CreateRequestBuilder<PurchasePriceAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchasePriceAgreements` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchasePriceAgreements.dataAreaId}.
   * @param recordId Key property. See {@link PurchasePriceAgreements.recordId}.
   * @returns A request builder for creating requests to retrieve one `PurchasePriceAgreements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchasePriceAgreements<T>, T> {
    return new GetByKeyRequestBuilder<PurchasePriceAgreements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchasePriceAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchasePriceAgreements`.
   */
  update(
    entity: PurchasePriceAgreements<T>
  ): UpdateRequestBuilder<PurchasePriceAgreements<T>, T> {
    return new UpdateRequestBuilder<PurchasePriceAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchasePriceAgreements`.
   * @param dataAreaId Key property. See {@link PurchasePriceAgreements.dataAreaId}.
   * @param recordId Key property. See {@link PurchasePriceAgreements.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchasePriceAgreements`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<PurchasePriceAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchasePriceAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchasePriceAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: PurchasePriceAgreements<T>
  ): DeleteRequestBuilder<PurchasePriceAgreements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<PurchasePriceAgreements<T>, T> {
    return new DeleteRequestBuilder<PurchasePriceAgreements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchasePriceAgreements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
