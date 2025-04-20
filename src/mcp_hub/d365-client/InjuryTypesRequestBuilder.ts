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
import { InjuryTypes } from './InjuryTypes';

/**
 * Request builder class for operations supported on the {@link InjuryTypes} entity.
 */
export class InjuryTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryTypes<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryTypes` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryTypes` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryTypes<T>, T> {
    return new GetAllRequestBuilder<InjuryTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InjuryTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryTypes`.
   */
  create(entity: InjuryTypes<T>): CreateRequestBuilder<InjuryTypes<T>, T> {
    return new CreateRequestBuilder<InjuryTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InjuryTypes` entity based on its keys.
   * @param injuryTypeId Key property. See {@link InjuryTypes.injuryTypeId}.
   * @returns A request builder for creating requests to retrieve one `InjuryTypes` entity based on its keys.
   */
  getByKey(
    injuryTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjuryTypes<T>, T> {
    return new GetByKeyRequestBuilder<InjuryTypes<T>, T>(this.entityApi, {
      InjuryTypeId: injuryTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryTypes`.
   */
  update(entity: InjuryTypes<T>): UpdateRequestBuilder<InjuryTypes<T>, T> {
    return new UpdateRequestBuilder<InjuryTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryTypes`.
   * @param injuryTypeId Key property. See {@link InjuryTypes.injuryTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryTypes`.
   */
  delete(injuryTypeId: string): DeleteRequestBuilder<InjuryTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryTypes` by taking the entity as a parameter.
   */
  delete(entity: InjuryTypes<T>): DeleteRequestBuilder<InjuryTypes<T>, T>;
  delete(injuryTypeIdOrEntity: any): DeleteRequestBuilder<InjuryTypes<T>, T> {
    return new DeleteRequestBuilder<InjuryTypes<T>, T>(
      this.entityApi,
      injuryTypeIdOrEntity instanceof InjuryTypes
        ? injuryTypeIdOrEntity
        : { InjuryTypeId: injuryTypeIdOrEntity! }
    );
  }
}
