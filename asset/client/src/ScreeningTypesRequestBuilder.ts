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
import { ScreeningTypes } from './ScreeningTypes';

/**
 * Request builder class for operations supported on the {@link ScreeningTypes} entity.
 */
export class ScreeningTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ScreeningTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ScreeningTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ScreeningTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ScreeningTypes<T>, T> {
    return new GetAllRequestBuilder<ScreeningTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ScreeningTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ScreeningTypes`.
   */
  create(
    entity: ScreeningTypes<T>
  ): CreateRequestBuilder<ScreeningTypes<T>, T> {
    return new CreateRequestBuilder<ScreeningTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ScreeningTypes` entity based on its keys.
   * @param screeningTypeId Key property. See {@link ScreeningTypes.screeningTypeId}.
   * @returns A request builder for creating requests to retrieve one `ScreeningTypes` entity based on its keys.
   */
  getByKey(
    screeningTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ScreeningTypes<T>, T> {
    return new GetByKeyRequestBuilder<ScreeningTypes<T>, T>(this.entityApi, {
      ScreeningTypeId: screeningTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ScreeningTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ScreeningTypes`.
   */
  update(
    entity: ScreeningTypes<T>
  ): UpdateRequestBuilder<ScreeningTypes<T>, T> {
    return new UpdateRequestBuilder<ScreeningTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ScreeningTypes`.
   * @param screeningTypeId Key property. See {@link ScreeningTypes.screeningTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `ScreeningTypes`.
   */
  delete(screeningTypeId: string): DeleteRequestBuilder<ScreeningTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ScreeningTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ScreeningTypes` by taking the entity as a parameter.
   */
  delete(entity: ScreeningTypes<T>): DeleteRequestBuilder<ScreeningTypes<T>, T>;
  delete(
    screeningTypeIdOrEntity: any
  ): DeleteRequestBuilder<ScreeningTypes<T>, T> {
    return new DeleteRequestBuilder<ScreeningTypes<T>, T>(
      this.entityApi,
      screeningTypeIdOrEntity instanceof ScreeningTypes
        ? screeningTypeIdOrEntity
        : { ScreeningTypeId: screeningTypeIdOrEntity! }
    );
  }
}
