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
import { EmailParameters } from './EmailParameters';

/**
 * Request builder class for operations supported on the {@link EmailParameters} entity.
 */
export class EmailParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmailParameters<T>, T> {
  /**
   * Returns a request builder for querying all `EmailParameters` entities.
   * @returns A request builder for creating requests to retrieve all `EmailParameters` entities.
   */
  getAll(): GetAllRequestBuilder<EmailParameters<T>, T> {
    return new GetAllRequestBuilder<EmailParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmailParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmailParameters`.
   */
  create(
    entity: EmailParameters<T>
  ): CreateRequestBuilder<EmailParameters<T>, T> {
    return new CreateRequestBuilder<EmailParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmailParameters` entity based on its keys.
   * @param id Key property. See {@link EmailParameters.id}.
   * @returns A request builder for creating requests to retrieve one `EmailParameters` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EmailParameters<T>, T> {
    return new GetByKeyRequestBuilder<EmailParameters<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmailParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmailParameters`.
   */
  update(
    entity: EmailParameters<T>
  ): UpdateRequestBuilder<EmailParameters<T>, T> {
    return new UpdateRequestBuilder<EmailParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmailParameters`.
   * @param id Key property. See {@link EmailParameters.id}.
   * @returns A request builder for creating requests that delete an entity of type `EmailParameters`.
   */
  delete(id: number): DeleteRequestBuilder<EmailParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmailParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmailParameters` by taking the entity as a parameter.
   */
  delete(
    entity: EmailParameters<T>
  ): DeleteRequestBuilder<EmailParameters<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<EmailParameters<T>, T> {
    return new DeleteRequestBuilder<EmailParameters<T>, T>(
      this.entityApi,
      idOrEntity instanceof EmailParameters ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
