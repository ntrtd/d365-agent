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
import { TaxPurchaseTaxTrans } from './TaxPurchaseTaxTrans';

/**
 * Request builder class for operations supported on the {@link TaxPurchaseTaxTrans} entity.
 */
export class TaxPurchaseTaxTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxPurchaseTaxTrans<T>, T> {
  /**
   * Returns a request builder for querying all `TaxPurchaseTaxTrans` entities.
   * @returns A request builder for creating requests to retrieve all `TaxPurchaseTaxTrans` entities.
   */
  getAll(): GetAllRequestBuilder<TaxPurchaseTaxTrans<T>, T> {
    return new GetAllRequestBuilder<TaxPurchaseTaxTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxPurchaseTaxTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxPurchaseTaxTrans`.
   */
  create(
    entity: TaxPurchaseTaxTrans<T>
  ): CreateRequestBuilder<TaxPurchaseTaxTrans<T>, T> {
    return new CreateRequestBuilder<TaxPurchaseTaxTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxPurchaseTaxTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxPurchaseTaxTrans.dataAreaId}.
   * @param transId Key property. See {@link TaxPurchaseTaxTrans.transId}.
   * @returns A request builder for creating requests to retrieve one `TaxPurchaseTaxTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<TaxPurchaseTaxTrans<T>, T> {
    return new GetByKeyRequestBuilder<TaxPurchaseTaxTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransID: transId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxPurchaseTaxTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxPurchaseTaxTrans`.
   */
  update(
    entity: TaxPurchaseTaxTrans<T>
  ): UpdateRequestBuilder<TaxPurchaseTaxTrans<T>, T> {
    return new UpdateRequestBuilder<TaxPurchaseTaxTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxPurchaseTaxTrans`.
   * @param dataAreaId Key property. See {@link TaxPurchaseTaxTrans.dataAreaId}.
   * @param transId Key property. See {@link TaxPurchaseTaxTrans.transId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxPurchaseTaxTrans`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<TaxPurchaseTaxTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxPurchaseTaxTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxPurchaseTaxTrans` by taking the entity as a parameter.
   */
  delete(
    entity: TaxPurchaseTaxTrans<T>
  ): DeleteRequestBuilder<TaxPurchaseTaxTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<TaxPurchaseTaxTrans<T>, T> {
    return new DeleteRequestBuilder<TaxPurchaseTaxTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxPurchaseTaxTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransID: transId!
          }
    );
  }
}
