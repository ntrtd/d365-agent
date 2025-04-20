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
import { InjuryOutcomeTypes } from './InjuryOutcomeTypes';

/**
 * Request builder class for operations supported on the {@link InjuryOutcomeTypes} entity.
 */
export class InjuryOutcomeTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryOutcomeTypes<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryOutcomeTypes` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryOutcomeTypes` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryOutcomeTypes<T>, T> {
    return new GetAllRequestBuilder<InjuryOutcomeTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InjuryOutcomeTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryOutcomeTypes`.
   */
  create(
    entity: InjuryOutcomeTypes<T>
  ): CreateRequestBuilder<InjuryOutcomeTypes<T>, T> {
    return new CreateRequestBuilder<InjuryOutcomeTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryOutcomeTypes` entity based on its keys.
   * @param outcomeTypeId Key property. See {@link InjuryOutcomeTypes.outcomeTypeId}.
   * @returns A request builder for creating requests to retrieve one `InjuryOutcomeTypes` entity based on its keys.
   */
  getByKey(
    outcomeTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjuryOutcomeTypes<T>, T> {
    return new GetByKeyRequestBuilder<InjuryOutcomeTypes<T>, T>(
      this.entityApi,
      { OutcomeTypeId: outcomeTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryOutcomeTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryOutcomeTypes`.
   */
  update(
    entity: InjuryOutcomeTypes<T>
  ): UpdateRequestBuilder<InjuryOutcomeTypes<T>, T> {
    return new UpdateRequestBuilder<InjuryOutcomeTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryOutcomeTypes`.
   * @param outcomeTypeId Key property. See {@link InjuryOutcomeTypes.outcomeTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryOutcomeTypes`.
   */
  delete(outcomeTypeId: string): DeleteRequestBuilder<InjuryOutcomeTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryOutcomeTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryOutcomeTypes` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryOutcomeTypes<T>
  ): DeleteRequestBuilder<InjuryOutcomeTypes<T>, T>;
  delete(
    outcomeTypeIdOrEntity: any
  ): DeleteRequestBuilder<InjuryOutcomeTypes<T>, T> {
    return new DeleteRequestBuilder<InjuryOutcomeTypes<T>, T>(
      this.entityApi,
      outcomeTypeIdOrEntity instanceof InjuryOutcomeTypes
        ? outcomeTypeIdOrEntity
        : { OutcomeTypeId: outcomeTypeIdOrEntity! }
    );
  }
}
