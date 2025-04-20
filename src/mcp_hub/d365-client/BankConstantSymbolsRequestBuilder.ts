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
import { BankConstantSymbols } from './BankConstantSymbols';

/**
 * Request builder class for operations supported on the {@link BankConstantSymbols} entity.
 */
export class BankConstantSymbolsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankConstantSymbols<T>, T> {
  /**
   * Returns a request builder for querying all `BankConstantSymbols` entities.
   * @returns A request builder for creating requests to retrieve all `BankConstantSymbols` entities.
   */
  getAll(): GetAllRequestBuilder<BankConstantSymbols<T>, T> {
    return new GetAllRequestBuilder<BankConstantSymbols<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankConstantSymbols` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankConstantSymbols`.
   */
  create(
    entity: BankConstantSymbols<T>
  ): CreateRequestBuilder<BankConstantSymbols<T>, T> {
    return new CreateRequestBuilder<BankConstantSymbols<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankConstantSymbols` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankConstantSymbols.dataAreaId}.
   * @param constantSymbol Key property. See {@link BankConstantSymbols.constantSymbol}.
   * @returns A request builder for creating requests to retrieve one `BankConstantSymbols` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    constantSymbol: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankConstantSymbols<T>, T> {
    return new GetByKeyRequestBuilder<BankConstantSymbols<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ConstantSymbol: constantSymbol
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankConstantSymbols`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankConstantSymbols`.
   */
  update(
    entity: BankConstantSymbols<T>
  ): UpdateRequestBuilder<BankConstantSymbols<T>, T> {
    return new UpdateRequestBuilder<BankConstantSymbols<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankConstantSymbols`.
   * @param dataAreaId Key property. See {@link BankConstantSymbols.dataAreaId}.
   * @param constantSymbol Key property. See {@link BankConstantSymbols.constantSymbol}.
   * @returns A request builder for creating requests that delete an entity of type `BankConstantSymbols`.
   */
  delete(
    dataAreaId: string,
    constantSymbol: string
  ): DeleteRequestBuilder<BankConstantSymbols<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankConstantSymbols`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankConstantSymbols` by taking the entity as a parameter.
   */
  delete(
    entity: BankConstantSymbols<T>
  ): DeleteRequestBuilder<BankConstantSymbols<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    constantSymbol?: string
  ): DeleteRequestBuilder<BankConstantSymbols<T>, T> {
    return new DeleteRequestBuilder<BankConstantSymbols<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankConstantSymbols
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConstantSymbol: constantSymbol!
          }
    );
  }
}
