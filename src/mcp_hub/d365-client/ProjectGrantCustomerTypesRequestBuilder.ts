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
import { ProjectGrantCustomerTypes } from './ProjectGrantCustomerTypes';

/**
 * Request builder class for operations supported on the {@link ProjectGrantCustomerTypes} entity.
 */
export class ProjectGrantCustomerTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectGrantCustomerTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectGrantCustomerTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectGrantCustomerTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectGrantCustomerTypes<T>, T> {
    return new GetAllRequestBuilder<ProjectGrantCustomerTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectGrantCustomerTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectGrantCustomerTypes`.
   */
  create(
    entity: ProjectGrantCustomerTypes<T>
  ): CreateRequestBuilder<ProjectGrantCustomerTypes<T>, T> {
    return new CreateRequestBuilder<ProjectGrantCustomerTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectGrantCustomerTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectGrantCustomerTypes.dataAreaId}.
   * @param grantorType Key property. See {@link ProjectGrantCustomerTypes.grantorType}.
   * @returns A request builder for creating requests to retrieve one `ProjectGrantCustomerTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    grantorType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectGrantCustomerTypes<T>, T> {
    return new GetByKeyRequestBuilder<ProjectGrantCustomerTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GrantorType: grantorType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectGrantCustomerTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectGrantCustomerTypes`.
   */
  update(
    entity: ProjectGrantCustomerTypes<T>
  ): UpdateRequestBuilder<ProjectGrantCustomerTypes<T>, T> {
    return new UpdateRequestBuilder<ProjectGrantCustomerTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectGrantCustomerTypes`.
   * @param dataAreaId Key property. See {@link ProjectGrantCustomerTypes.dataAreaId}.
   * @param grantorType Key property. See {@link ProjectGrantCustomerTypes.grantorType}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectGrantCustomerTypes`.
   */
  delete(
    dataAreaId: string,
    grantorType: string
  ): DeleteRequestBuilder<ProjectGrantCustomerTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectGrantCustomerTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectGrantCustomerTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectGrantCustomerTypes<T>
  ): DeleteRequestBuilder<ProjectGrantCustomerTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    grantorType?: string
  ): DeleteRequestBuilder<ProjectGrantCustomerTypes<T>, T> {
    return new DeleteRequestBuilder<ProjectGrantCustomerTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectGrantCustomerTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GrantorType: grantorType!
          }
    );
  }
}
