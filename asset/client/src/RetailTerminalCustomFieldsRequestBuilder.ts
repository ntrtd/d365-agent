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
import { RetailTerminalCustomFields } from './RetailTerminalCustomFields';
import { RetailTerminalCustomFieldTypeBase } from './RetailTerminalCustomFieldTypeBase';

/**
 * Request builder class for operations supported on the {@link RetailTerminalCustomFields} entity.
 */
export class RetailTerminalCustomFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTerminalCustomFields<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTerminalCustomFields` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTerminalCustomFields` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTerminalCustomFields<T>, T> {
    return new GetAllRequestBuilder<RetailTerminalCustomFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTerminalCustomFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTerminalCustomFields`.
   */
  create(
    entity: RetailTerminalCustomFields<T>
  ): CreateRequestBuilder<RetailTerminalCustomFields<T>, T> {
    return new CreateRequestBuilder<RetailTerminalCustomFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTerminalCustomFields` entity based on its keys.
   * @param name Key property. See {@link RetailTerminalCustomFields.name}.
   * @param type Key property. See {@link RetailTerminalCustomFields.type}.
   * @returns A request builder for creating requests to retrieve one `RetailTerminalCustomFields` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailTerminalCustomFieldTypeBase'
    >
  ): GetByKeyRequestBuilder<RetailTerminalCustomFields<T>, T> {
    return new GetByKeyRequestBuilder<RetailTerminalCustomFields<T>, T>(
      this.entityApi,
      {
        Name: name,
        Type: type
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTerminalCustomFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTerminalCustomFields`.
   */
  update(
    entity: RetailTerminalCustomFields<T>
  ): UpdateRequestBuilder<RetailTerminalCustomFields<T>, T> {
    return new UpdateRequestBuilder<RetailTerminalCustomFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTerminalCustomFields`.
   * @param name Key property. See {@link RetailTerminalCustomFields.name}.
   * @param type Key property. See {@link RetailTerminalCustomFields.type}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTerminalCustomFields`.
   */
  delete(
    name: string,
    type: RetailTerminalCustomFieldTypeBase
  ): DeleteRequestBuilder<RetailTerminalCustomFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTerminalCustomFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTerminalCustomFields` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTerminalCustomFields<T>
  ): DeleteRequestBuilder<RetailTerminalCustomFields<T>, T>;
  delete(
    nameOrEntity: any,
    type?: RetailTerminalCustomFieldTypeBase
  ): DeleteRequestBuilder<RetailTerminalCustomFields<T>, T> {
    return new DeleteRequestBuilder<RetailTerminalCustomFields<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailTerminalCustomFields
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            Type: type!
          }
    );
  }
}
