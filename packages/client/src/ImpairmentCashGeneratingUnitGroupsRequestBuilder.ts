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
import { ImpairmentCashGeneratingUnitGroups } from './ImpairmentCashGeneratingUnitGroups';

/**
 * Request builder class for operations supported on the {@link ImpairmentCashGeneratingUnitGroups} entity.
 */
export class ImpairmentCashGeneratingUnitGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ImpairmentCashGeneratingUnitGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ImpairmentCashGeneratingUnitGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T> {
    return new GetAllRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ImpairmentCashGeneratingUnitGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImpairmentCashGeneratingUnitGroups`.
   */
  create(
    entity: ImpairmentCashGeneratingUnitGroups<T>
  ): CreateRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T> {
    return new CreateRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ImpairmentCashGeneratingUnitGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ImpairmentCashGeneratingUnitGroups.dataAreaId}.
   * @param cguGroup Key property. See {@link ImpairmentCashGeneratingUnitGroups.cguGroup}.
   * @returns A request builder for creating requests to retrieve one `ImpairmentCashGeneratingUnitGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cguGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T> {
    return new GetByKeyRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CGUGroup: cguGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ImpairmentCashGeneratingUnitGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImpairmentCashGeneratingUnitGroups`.
   */
  update(
    entity: ImpairmentCashGeneratingUnitGroups<T>
  ): UpdateRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T> {
    return new UpdateRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ImpairmentCashGeneratingUnitGroups`.
   * @param dataAreaId Key property. See {@link ImpairmentCashGeneratingUnitGroups.dataAreaId}.
   * @param cguGroup Key property. See {@link ImpairmentCashGeneratingUnitGroups.cguGroup}.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentCashGeneratingUnitGroups`.
   */
  delete(
    dataAreaId: string,
    cguGroup: string
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImpairmentCashGeneratingUnitGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentCashGeneratingUnitGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ImpairmentCashGeneratingUnitGroups<T>
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cguGroup?: string
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T> {
    return new DeleteRequestBuilder<ImpairmentCashGeneratingUnitGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ImpairmentCashGeneratingUnitGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CGUGroup: cguGroup!
          }
    );
  }
}
