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
import { DecisionMakingRoles } from './DecisionMakingRoles';

/**
 * Request builder class for operations supported on the {@link DecisionMakingRoles} entity.
 */
export class DecisionMakingRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DecisionMakingRoles<T>, T> {
  /**
   * Returns a request builder for querying all `DecisionMakingRoles` entities.
   * @returns A request builder for creating requests to retrieve all `DecisionMakingRoles` entities.
   */
  getAll(): GetAllRequestBuilder<DecisionMakingRoles<T>, T> {
    return new GetAllRequestBuilder<DecisionMakingRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DecisionMakingRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DecisionMakingRoles`.
   */
  create(
    entity: DecisionMakingRoles<T>
  ): CreateRequestBuilder<DecisionMakingRoles<T>, T> {
    return new CreateRequestBuilder<DecisionMakingRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DecisionMakingRoles` entity based on its keys.
   * @param dataAreaId Key property. See {@link DecisionMakingRoles.dataAreaId}.
   * @param roleName Key property. See {@link DecisionMakingRoles.roleName}.
   * @returns A request builder for creating requests to retrieve one `DecisionMakingRoles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    roleName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DecisionMakingRoles<T>, T> {
    return new GetByKeyRequestBuilder<DecisionMakingRoles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoleName: roleName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DecisionMakingRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DecisionMakingRoles`.
   */
  update(
    entity: DecisionMakingRoles<T>
  ): UpdateRequestBuilder<DecisionMakingRoles<T>, T> {
    return new UpdateRequestBuilder<DecisionMakingRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DecisionMakingRoles`.
   * @param dataAreaId Key property. See {@link DecisionMakingRoles.dataAreaId}.
   * @param roleName Key property. See {@link DecisionMakingRoles.roleName}.
   * @returns A request builder for creating requests that delete an entity of type `DecisionMakingRoles`.
   */
  delete(
    dataAreaId: string,
    roleName: string
  ): DeleteRequestBuilder<DecisionMakingRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DecisionMakingRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DecisionMakingRoles` by taking the entity as a parameter.
   */
  delete(
    entity: DecisionMakingRoles<T>
  ): DeleteRequestBuilder<DecisionMakingRoles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    roleName?: string
  ): DeleteRequestBuilder<DecisionMakingRoles<T>, T> {
    return new DeleteRequestBuilder<DecisionMakingRoles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DecisionMakingRoles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoleName: roleName!
          }
    );
  }
}
