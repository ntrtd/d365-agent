/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PositionHierarchies } from './PositionHierarchies';

/**
 * Request builder class for operations supported on the {@link PositionHierarchies} entity.
 */
export class PositionHierarchiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionHierarchies<T>, T> {
  /**
   * Returns a request builder for querying all `PositionHierarchies` entities.
   * @returns A request builder for creating requests to retrieve all `PositionHierarchies` entities.
   */
  getAll(): GetAllRequestBuilder<PositionHierarchies<T>, T> {
    return new GetAllRequestBuilder<PositionHierarchies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionHierarchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionHierarchies`.
   */
  create(
    entity: PositionHierarchies<T>
  ): CreateRequestBuilder<PositionHierarchies<T>, T> {
    return new CreateRequestBuilder<PositionHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionHierarchies` entity based on its keys.
   * @param positionId Key property. See {@link PositionHierarchies.positionId}.
   * @param hierarchyTypeName Key property. See {@link PositionHierarchies.hierarchyTypeName}.
   * @param validFrom Key property. See {@link PositionHierarchies.validFrom}.
   * @param validTo Key property. See {@link PositionHierarchies.validTo}.
   * @returns A request builder for creating requests to retrieve one `PositionHierarchies` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    hierarchyTypeName: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PositionHierarchies<T>, T> {
    return new GetByKeyRequestBuilder<PositionHierarchies<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        HierarchyTypeName: hierarchyTypeName,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionHierarchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionHierarchies`.
   */
  update(
    entity: PositionHierarchies<T>
  ): UpdateRequestBuilder<PositionHierarchies<T>, T> {
    return new UpdateRequestBuilder<PositionHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionHierarchies`.
   * @param positionId Key property. See {@link PositionHierarchies.positionId}.
   * @param hierarchyTypeName Key property. See {@link PositionHierarchies.hierarchyTypeName}.
   * @param validFrom Key property. See {@link PositionHierarchies.validFrom}.
   * @param validTo Key property. See {@link PositionHierarchies.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PositionHierarchies`.
   */
  delete(
    positionId: string,
    hierarchyTypeName: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PositionHierarchies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionHierarchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionHierarchies` by taking the entity as a parameter.
   */
  delete(
    entity: PositionHierarchies<T>
  ): DeleteRequestBuilder<PositionHierarchies<T>, T>;
  delete(
    positionIdOrEntity: any,
    hierarchyTypeName?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PositionHierarchies<T>, T> {
    return new DeleteRequestBuilder<PositionHierarchies<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionHierarchies
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            HierarchyTypeName: hierarchyTypeName!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
