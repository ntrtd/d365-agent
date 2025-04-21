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
import { LtmContactPersons } from './LtmContactPersons';

/**
 * Request builder class for operations supported on the {@link LtmContactPersons} entity.
 */
export class LtmContactPersonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmContactPersons<T>, T> {
  /**
   * Returns a request builder for querying all `LtmContactPersons` entities.
   * @returns A request builder for creating requests to retrieve all `LtmContactPersons` entities.
   */
  getAll(): GetAllRequestBuilder<LtmContactPersons<T>, T> {
    return new GetAllRequestBuilder<LtmContactPersons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmContactPersons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmContactPersons`.
   */
  create(
    entity: LtmContactPersons<T>
  ): CreateRequestBuilder<LtmContactPersons<T>, T> {
    return new CreateRequestBuilder<LtmContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmContactPersons` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmContactPersons.dataAreaId}.
   * @param contactPersonId Key property. See {@link LtmContactPersons.contactPersonId}.
   * @returns A request builder for creating requests to retrieve one `LtmContactPersons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contactPersonId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmContactPersons<T>, T> {
    return new GetByKeyRequestBuilder<LtmContactPersons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ContactPersonId: contactPersonId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmContactPersons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmContactPersons`.
   */
  update(
    entity: LtmContactPersons<T>
  ): UpdateRequestBuilder<LtmContactPersons<T>, T> {
    return new UpdateRequestBuilder<LtmContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmContactPersons`.
   * @param dataAreaId Key property. See {@link LtmContactPersons.dataAreaId}.
   * @param contactPersonId Key property. See {@link LtmContactPersons.contactPersonId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmContactPersons`.
   */
  delete(
    dataAreaId: string,
    contactPersonId: string
  ): DeleteRequestBuilder<LtmContactPersons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmContactPersons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmContactPersons` by taking the entity as a parameter.
   */
  delete(
    entity: LtmContactPersons<T>
  ): DeleteRequestBuilder<LtmContactPersons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contactPersonId?: string
  ): DeleteRequestBuilder<LtmContactPersons<T>, T> {
    return new DeleteRequestBuilder<LtmContactPersons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmContactPersons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContactPersonId: contactPersonId!
          }
    );
  }
}
