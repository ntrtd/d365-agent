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
import { CashSymbols } from './CashSymbols';

/**
 * Request builder class for operations supported on the {@link CashSymbols} entity.
 */
export class CashSymbolsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashSymbols<T>, T> {
  /**
   * Returns a request builder for querying all `CashSymbols` entities.
   * @returns A request builder for creating requests to retrieve all `CashSymbols` entities.
   */
  getAll(): GetAllRequestBuilder<CashSymbols<T>, T> {
    return new GetAllRequestBuilder<CashSymbols<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashSymbols` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashSymbols`.
   */
  create(entity: CashSymbols<T>): CreateRequestBuilder<CashSymbols<T>, T> {
    return new CreateRequestBuilder<CashSymbols<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CashSymbols` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashSymbols.dataAreaId}.
   * @param code Key property. See {@link CashSymbols.code}.
   * @returns A request builder for creating requests to retrieve one `CashSymbols` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashSymbols<T>, T> {
    return new GetByKeyRequestBuilder<CashSymbols<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashSymbols`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashSymbols`.
   */
  update(entity: CashSymbols<T>): UpdateRequestBuilder<CashSymbols<T>, T> {
    return new UpdateRequestBuilder<CashSymbols<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CashSymbols`.
   * @param dataAreaId Key property. See {@link CashSymbols.dataAreaId}.
   * @param code Key property. See {@link CashSymbols.code}.
   * @returns A request builder for creating requests that delete an entity of type `CashSymbols`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<CashSymbols<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashSymbols`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashSymbols` by taking the entity as a parameter.
   */
  delete(entity: CashSymbols<T>): DeleteRequestBuilder<CashSymbols<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<CashSymbols<T>, T> {
    return new DeleteRequestBuilder<CashSymbols<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashSymbols
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
