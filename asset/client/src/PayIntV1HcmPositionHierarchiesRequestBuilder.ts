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
import { PayIntV1HcmPositionHierarchies } from './PayIntV1HcmPositionHierarchies';

/**
 * Request builder class for operations supported on the {@link PayIntV1HcmPositionHierarchies} entity.
 */
export class PayIntV1HcmPositionHierarchiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1HcmPositionHierarchies<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1HcmPositionHierarchies` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1HcmPositionHierarchies` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T> {
    return new GetAllRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1HcmPositionHierarchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1HcmPositionHierarchies`.
   */
  create(
    entity: PayIntV1HcmPositionHierarchies<T>
  ): CreateRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T> {
    return new CreateRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1HcmPositionHierarchies` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1HcmPositionHierarchies.positionId}.
   * @param hierarchyTypeName Key property. See {@link PayIntV1HcmPositionHierarchies.hierarchyTypeName}.
   * @param validFrom Key property. See {@link PayIntV1HcmPositionHierarchies.validFrom}.
   * @param validTo Key property. See {@link PayIntV1HcmPositionHierarchies.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1HcmPositionHierarchies` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    hierarchyTypeName: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T>(
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
   * Returns a request builder for updating an entity of type `PayIntV1HcmPositionHierarchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1HcmPositionHierarchies`.
   */
  update(
    entity: PayIntV1HcmPositionHierarchies<T>
  ): UpdateRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T> {
    return new UpdateRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmPositionHierarchies`.
   * @param positionId Key property. See {@link PayIntV1HcmPositionHierarchies.positionId}.
   * @param hierarchyTypeName Key property. See {@link PayIntV1HcmPositionHierarchies.hierarchyTypeName}.
   * @param validFrom Key property. See {@link PayIntV1HcmPositionHierarchies.validFrom}.
   * @param validTo Key property. See {@link PayIntV1HcmPositionHierarchies.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmPositionHierarchies`.
   */
  delete(
    positionId: string,
    hierarchyTypeName: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmPositionHierarchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmPositionHierarchies` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1HcmPositionHierarchies<T>
  ): DeleteRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T>;
  delete(
    positionIdOrEntity: any,
    hierarchyTypeName?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T> {
    return new DeleteRequestBuilder<PayIntV1HcmPositionHierarchies<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1HcmPositionHierarchies
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
