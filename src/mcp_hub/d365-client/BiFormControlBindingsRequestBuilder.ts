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
import { BiFormControlBindings } from './BiFormControlBindings';

/**
 * Request builder class for operations supported on the {@link BiFormControlBindings} entity.
 */
export class BiFormControlBindingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BiFormControlBindings<T>, T> {
  /**
   * Returns a request builder for querying all `BiFormControlBindings` entities.
   * @returns A request builder for creating requests to retrieve all `BiFormControlBindings` entities.
   */
  getAll(): GetAllRequestBuilder<BiFormControlBindings<T>, T> {
    return new GetAllRequestBuilder<BiFormControlBindings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BiFormControlBindings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BiFormControlBindings`.
   */
  create(
    entity: BiFormControlBindings<T>
  ): CreateRequestBuilder<BiFormControlBindings<T>, T> {
    return new CreateRequestBuilder<BiFormControlBindings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BiFormControlBindings` entity based on its keys.
   * @param formName Key property. See {@link BiFormControlBindings.formName}.
   * @param userId Key property. See {@link BiFormControlBindings.userId}.
   * @param dashboardId Key property. See {@link BiFormControlBindings.dashboardId}.
   * @param controlId Key property. See {@link BiFormControlBindings.controlId}.
   * @returns A request builder for creating requests to retrieve one `BiFormControlBindings` entity based on its keys.
   */
  getByKey(
    formName: DeserializedType<T, 'Edm.String'>,
    userId: DeserializedType<T, 'Edm.String'>,
    dashboardId: DeserializedType<T, 'Edm.Guid'>,
    controlId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<BiFormControlBindings<T>, T> {
    return new GetByKeyRequestBuilder<BiFormControlBindings<T>, T>(
      this.entityApi,
      {
        formName: formName,
        userId: userId,
        dashboardId: dashboardId,
        controlId: controlId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BiFormControlBindings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BiFormControlBindings`.
   */
  update(
    entity: BiFormControlBindings<T>
  ): UpdateRequestBuilder<BiFormControlBindings<T>, T> {
    return new UpdateRequestBuilder<BiFormControlBindings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BiFormControlBindings`.
   * @param formName Key property. See {@link BiFormControlBindings.formName}.
   * @param userId Key property. See {@link BiFormControlBindings.userId}.
   * @param dashboardId Key property. See {@link BiFormControlBindings.dashboardId}.
   * @param controlId Key property. See {@link BiFormControlBindings.controlId}.
   * @returns A request builder for creating requests that delete an entity of type `BiFormControlBindings`.
   */
  delete(
    formName: string,
    userId: string,
    dashboardId: string,
    controlId: string
  ): DeleteRequestBuilder<BiFormControlBindings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BiFormControlBindings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BiFormControlBindings` by taking the entity as a parameter.
   */
  delete(
    entity: BiFormControlBindings<T>
  ): DeleteRequestBuilder<BiFormControlBindings<T>, T>;
  delete(
    formNameOrEntity: any,
    userId?: string,
    dashboardId?: string,
    controlId?: string
  ): DeleteRequestBuilder<BiFormControlBindings<T>, T> {
    return new DeleteRequestBuilder<BiFormControlBindings<T>, T>(
      this.entityApi,
      formNameOrEntity instanceof BiFormControlBindings
        ? formNameOrEntity
        : {
            formName: formNameOrEntity!,
            userId: userId!,
            dashboardId: dashboardId!,
            controlId: controlId!
          }
    );
  }
}
