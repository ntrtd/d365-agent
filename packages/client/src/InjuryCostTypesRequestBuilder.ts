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
import { InjuryCostTypes } from './InjuryCostTypes';

/**
 * Request builder class for operations supported on the {@link InjuryCostTypes} entity.
 */
export class InjuryCostTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryCostTypes<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryCostTypes` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryCostTypes` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryCostTypes<T>, T> {
    return new GetAllRequestBuilder<InjuryCostTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InjuryCostTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryCostTypes`.
   */
  create(
    entity: InjuryCostTypes<T>
  ): CreateRequestBuilder<InjuryCostTypes<T>, T> {
    return new CreateRequestBuilder<InjuryCostTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryCostTypes` entity based on its keys.
   * @param costTypeId Key property. See {@link InjuryCostTypes.costTypeId}.
   * @returns A request builder for creating requests to retrieve one `InjuryCostTypes` entity based on its keys.
   */
  getByKey(
    costTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjuryCostTypes<T>, T> {
    return new GetByKeyRequestBuilder<InjuryCostTypes<T>, T>(this.entityApi, {
      CostTypeId: costTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryCostTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryCostTypes`.
   */
  update(
    entity: InjuryCostTypes<T>
  ): UpdateRequestBuilder<InjuryCostTypes<T>, T> {
    return new UpdateRequestBuilder<InjuryCostTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryCostTypes`.
   * @param costTypeId Key property. See {@link InjuryCostTypes.costTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryCostTypes`.
   */
  delete(costTypeId: string): DeleteRequestBuilder<InjuryCostTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryCostTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryCostTypes` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryCostTypes<T>
  ): DeleteRequestBuilder<InjuryCostTypes<T>, T>;
  delete(costTypeIdOrEntity: any): DeleteRequestBuilder<InjuryCostTypes<T>, T> {
    return new DeleteRequestBuilder<InjuryCostTypes<T>, T>(
      this.entityApi,
      costTypeIdOrEntity instanceof InjuryCostTypes
        ? costTypeIdOrEntity
        : { CostTypeId: costTypeIdOrEntity! }
    );
  }
}
