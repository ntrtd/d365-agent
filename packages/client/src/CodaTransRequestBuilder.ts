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
import { CodaTrans } from './CodaTrans';

/**
 * Request builder class for operations supported on the {@link CodaTrans} entity.
 */
export class CodaTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CodaTrans<T>, T> {
  /**
   * Returns a request builder for querying all `CodaTrans` entities.
   * @returns A request builder for creating requests to retrieve all `CodaTrans` entities.
   */
  getAll(): GetAllRequestBuilder<CodaTrans<T>, T> {
    return new GetAllRequestBuilder<CodaTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CodaTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CodaTrans`.
   */
  create(entity: CodaTrans<T>): CreateRequestBuilder<CodaTrans<T>, T> {
    return new CreateRequestBuilder<CodaTrans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CodaTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link CodaTrans.dataAreaId}.
   * @param transactionFamily Key property. See {@link CodaTrans.transactionFamily}.
   * @param transaction Key property. See {@link CodaTrans.transaction}.
   * @returns A request builder for creating requests to retrieve one `CodaTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionFamily: DeserializedType<T, 'Edm.String'>,
    transaction: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CodaTrans<T>, T> {
    return new GetByKeyRequestBuilder<CodaTrans<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TransactionFamily: transactionFamily,
      Transaction: transaction
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CodaTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CodaTrans`.
   */
  update(entity: CodaTrans<T>): UpdateRequestBuilder<CodaTrans<T>, T> {
    return new UpdateRequestBuilder<CodaTrans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CodaTrans`.
   * @param dataAreaId Key property. See {@link CodaTrans.dataAreaId}.
   * @param transactionFamily Key property. See {@link CodaTrans.transactionFamily}.
   * @param transaction Key property. See {@link CodaTrans.transaction}.
   * @returns A request builder for creating requests that delete an entity of type `CodaTrans`.
   */
  delete(
    dataAreaId: string,
    transactionFamily: string,
    transaction: string
  ): DeleteRequestBuilder<CodaTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CodaTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CodaTrans` by taking the entity as a parameter.
   */
  delete(entity: CodaTrans<T>): DeleteRequestBuilder<CodaTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionFamily?: string,
    transaction?: string
  ): DeleteRequestBuilder<CodaTrans<T>, T> {
    return new DeleteRequestBuilder<CodaTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CodaTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionFamily: transactionFamily!,
            Transaction: transaction!
          }
    );
  }
}
