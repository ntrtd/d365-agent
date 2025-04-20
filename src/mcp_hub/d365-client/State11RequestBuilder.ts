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
import { State11 } from './State11';

/**
 * Request builder class for operations supported on the {@link State11} entity.
 */
export class State11RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<State11<T>, T> {
  /**
   * Returns a request builder for querying all `State11` entities.
   * @returns A request builder for creating requests to retrieve all `State11` entities.
   */
  getAll(): GetAllRequestBuilder<State11<T>, T> {
    return new GetAllRequestBuilder<State11<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `State11` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `State11`.
   */
  create(entity: State11<T>): CreateRequestBuilder<State11<T>, T> {
    return new CreateRequestBuilder<State11<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `State11` entity based on its keys.
   * @param dataAreaId Key property. See {@link State11.dataAreaId}.
   * @param bankAccount Key property. See {@link State11.bankAccount}.
   * @returns A request builder for creating requests to retrieve one `State11` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<State11<T>, T> {
    return new GetByKeyRequestBuilder<State11<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BankAccount: bankAccount
    });
  }

  /**
   * Returns a request builder for updating an entity of type `State11`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `State11`.
   */
  update(entity: State11<T>): UpdateRequestBuilder<State11<T>, T> {
    return new UpdateRequestBuilder<State11<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `State11`.
   * @param dataAreaId Key property. See {@link State11.dataAreaId}.
   * @param bankAccount Key property. See {@link State11.bankAccount}.
   * @returns A request builder for creating requests that delete an entity of type `State11`.
   */
  delete(
    dataAreaId: string,
    bankAccount: string
  ): DeleteRequestBuilder<State11<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `State11`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `State11` by taking the entity as a parameter.
   */
  delete(entity: State11<T>): DeleteRequestBuilder<State11<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccount?: string
  ): DeleteRequestBuilder<State11<T>, T> {
    return new DeleteRequestBuilder<State11<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof State11
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccount: bankAccount!
          }
    );
  }
}
