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
import { OfficeAppAppletRegistrations } from './OfficeAppAppletRegistrations';

/**
 * Request builder class for operations supported on the {@link OfficeAppAppletRegistrations} entity.
 */
export class OfficeAppAppletRegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OfficeAppAppletRegistrations<T>, T> {
  /**
   * Returns a request builder for querying all `OfficeAppAppletRegistrations` entities.
   * @returns A request builder for creating requests to retrieve all `OfficeAppAppletRegistrations` entities.
   */
  getAll(): GetAllRequestBuilder<OfficeAppAppletRegistrations<T>, T> {
    return new GetAllRequestBuilder<OfficeAppAppletRegistrations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OfficeAppAppletRegistrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OfficeAppAppletRegistrations`.
   */
  create(
    entity: OfficeAppAppletRegistrations<T>
  ): CreateRequestBuilder<OfficeAppAppletRegistrations<T>, T> {
    return new CreateRequestBuilder<OfficeAppAppletRegistrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OfficeAppAppletRegistrations` entity based on its keys.
   * @param appletId Key property. See {@link OfficeAppAppletRegistrations.appletId}.
   * @returns A request builder for creating requests to retrieve one `OfficeAppAppletRegistrations` entity based on its keys.
   */
  getByKey(
    appletId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OfficeAppAppletRegistrations<T>, T> {
    return new GetByKeyRequestBuilder<OfficeAppAppletRegistrations<T>, T>(
      this.entityApi,
      { AppletID: appletId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OfficeAppAppletRegistrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OfficeAppAppletRegistrations`.
   */
  update(
    entity: OfficeAppAppletRegistrations<T>
  ): UpdateRequestBuilder<OfficeAppAppletRegistrations<T>, T> {
    return new UpdateRequestBuilder<OfficeAppAppletRegistrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OfficeAppAppletRegistrations`.
   * @param appletId Key property. See {@link OfficeAppAppletRegistrations.appletId}.
   * @returns A request builder for creating requests that delete an entity of type `OfficeAppAppletRegistrations`.
   */
  delete(
    appletId: string
  ): DeleteRequestBuilder<OfficeAppAppletRegistrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OfficeAppAppletRegistrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OfficeAppAppletRegistrations` by taking the entity as a parameter.
   */
  delete(
    entity: OfficeAppAppletRegistrations<T>
  ): DeleteRequestBuilder<OfficeAppAppletRegistrations<T>, T>;
  delete(
    appletIdOrEntity: any
  ): DeleteRequestBuilder<OfficeAppAppletRegistrations<T>, T> {
    return new DeleteRequestBuilder<OfficeAppAppletRegistrations<T>, T>(
      this.entityApi,
      appletIdOrEntity instanceof OfficeAppAppletRegistrations
        ? appletIdOrEntity
        : { AppletID: appletIdOrEntity! }
    );
  }
}
