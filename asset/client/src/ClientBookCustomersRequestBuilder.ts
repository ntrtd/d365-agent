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
import { ClientBookCustomers } from './ClientBookCustomers';

/**
 * Request builder class for operations supported on the {@link ClientBookCustomers} entity.
 */
export class ClientBookCustomersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClientBookCustomers<T>, T> {
  /**
   * Returns a request builder for querying all `ClientBookCustomers` entities.
   * @returns A request builder for creating requests to retrieve all `ClientBookCustomers` entities.
   */
  getAll(): GetAllRequestBuilder<ClientBookCustomers<T>, T> {
    return new GetAllRequestBuilder<ClientBookCustomers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ClientBookCustomers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClientBookCustomers`.
   */
  create(
    entity: ClientBookCustomers<T>
  ): CreateRequestBuilder<ClientBookCustomers<T>, T> {
    return new CreateRequestBuilder<ClientBookCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClientBookCustomers` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClientBookCustomers.dataAreaId}.
   * @param customerAccountNumber Key property. See {@link ClientBookCustomers.customerAccountNumber}.
   * @param clientBookId Key property. See {@link ClientBookCustomers.clientBookId}.
   * @returns A request builder for creating requests to retrieve one `ClientBookCustomers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    clientBookId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClientBookCustomers<T>, T> {
    return new GetByKeyRequestBuilder<ClientBookCustomers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustomerAccountNumber: customerAccountNumber,
        ClientBookId: clientBookId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClientBookCustomers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClientBookCustomers`.
   */
  update(
    entity: ClientBookCustomers<T>
  ): UpdateRequestBuilder<ClientBookCustomers<T>, T> {
    return new UpdateRequestBuilder<ClientBookCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClientBookCustomers`.
   * @param dataAreaId Key property. See {@link ClientBookCustomers.dataAreaId}.
   * @param customerAccountNumber Key property. See {@link ClientBookCustomers.customerAccountNumber}.
   * @param clientBookId Key property. See {@link ClientBookCustomers.clientBookId}.
   * @returns A request builder for creating requests that delete an entity of type `ClientBookCustomers`.
   */
  delete(
    dataAreaId: string,
    customerAccountNumber: string,
    clientBookId: string
  ): DeleteRequestBuilder<ClientBookCustomers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClientBookCustomers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClientBookCustomers` by taking the entity as a parameter.
   */
  delete(
    entity: ClientBookCustomers<T>
  ): DeleteRequestBuilder<ClientBookCustomers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerAccountNumber?: string,
    clientBookId?: string
  ): DeleteRequestBuilder<ClientBookCustomers<T>, T> {
    return new DeleteRequestBuilder<ClientBookCustomers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClientBookCustomers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerAccountNumber: customerAccountNumber!,
            ClientBookId: clientBookId!
          }
    );
  }
}
