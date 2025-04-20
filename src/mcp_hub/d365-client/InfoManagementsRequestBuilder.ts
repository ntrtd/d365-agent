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
import { InfoManagements } from './InfoManagements';

/**
 * Request builder class for operations supported on the {@link InfoManagements} entity.
 */
export class InfoManagementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InfoManagements<T>, T> {
  /**
   * Returns a request builder for querying all `InfoManagements` entities.
   * @returns A request builder for creating requests to retrieve all `InfoManagements` entities.
   */
  getAll(): GetAllRequestBuilder<InfoManagements<T>, T> {
    return new GetAllRequestBuilder<InfoManagements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InfoManagements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InfoManagements`.
   */
  create(
    entity: InfoManagements<T>
  ): CreateRequestBuilder<InfoManagements<T>, T> {
    return new CreateRequestBuilder<InfoManagements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InfoManagements` entity based on its keys.
   * @param name Key property. See {@link InfoManagements.name}.
   * @param locationId Key property. See {@link InfoManagements.locationId}.
   * @returns A request builder for creating requests to retrieve one `InfoManagements` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InfoManagements<T>, T> {
    return new GetByKeyRequestBuilder<InfoManagements<T>, T>(this.entityApi, {
      Name: name,
      LocationId: locationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InfoManagements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InfoManagements`.
   */
  update(
    entity: InfoManagements<T>
  ): UpdateRequestBuilder<InfoManagements<T>, T> {
    return new UpdateRequestBuilder<InfoManagements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InfoManagements`.
   * @param name Key property. See {@link InfoManagements.name}.
   * @param locationId Key property. See {@link InfoManagements.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `InfoManagements`.
   */
  delete(
    name: string,
    locationId: string
  ): DeleteRequestBuilder<InfoManagements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InfoManagements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InfoManagements` by taking the entity as a parameter.
   */
  delete(
    entity: InfoManagements<T>
  ): DeleteRequestBuilder<InfoManagements<T>, T>;
  delete(
    nameOrEntity: any,
    locationId?: string
  ): DeleteRequestBuilder<InfoManagements<T>, T> {
    return new DeleteRequestBuilder<InfoManagements<T>, T>(
      this.entityApi,
      nameOrEntity instanceof InfoManagements
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            LocationId: locationId!
          }
    );
  }
}
