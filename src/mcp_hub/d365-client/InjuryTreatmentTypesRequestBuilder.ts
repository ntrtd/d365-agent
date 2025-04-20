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
import { InjuryTreatmentTypes } from './InjuryTreatmentTypes';

/**
 * Request builder class for operations supported on the {@link InjuryTreatmentTypes} entity.
 */
export class InjuryTreatmentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InjuryTreatmentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `InjuryTreatmentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `InjuryTreatmentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<InjuryTreatmentTypes<T>, T> {
    return new GetAllRequestBuilder<InjuryTreatmentTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InjuryTreatmentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InjuryTreatmentTypes`.
   */
  create(
    entity: InjuryTreatmentTypes<T>
  ): CreateRequestBuilder<InjuryTreatmentTypes<T>, T> {
    return new CreateRequestBuilder<InjuryTreatmentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InjuryTreatmentTypes` entity based on its keys.
   * @param treatmentTypeId Key property. See {@link InjuryTreatmentTypes.treatmentTypeId}.
   * @returns A request builder for creating requests to retrieve one `InjuryTreatmentTypes` entity based on its keys.
   */
  getByKey(
    treatmentTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InjuryTreatmentTypes<T>, T> {
    return new GetByKeyRequestBuilder<InjuryTreatmentTypes<T>, T>(
      this.entityApi,
      { TreatmentTypeId: treatmentTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InjuryTreatmentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InjuryTreatmentTypes`.
   */
  update(
    entity: InjuryTreatmentTypes<T>
  ): UpdateRequestBuilder<InjuryTreatmentTypes<T>, T> {
    return new UpdateRequestBuilder<InjuryTreatmentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InjuryTreatmentTypes`.
   * @param treatmentTypeId Key property. See {@link InjuryTreatmentTypes.treatmentTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `InjuryTreatmentTypes`.
   */
  delete(
    treatmentTypeId: string
  ): DeleteRequestBuilder<InjuryTreatmentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InjuryTreatmentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InjuryTreatmentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: InjuryTreatmentTypes<T>
  ): DeleteRequestBuilder<InjuryTreatmentTypes<T>, T>;
  delete(
    treatmentTypeIdOrEntity: any
  ): DeleteRequestBuilder<InjuryTreatmentTypes<T>, T> {
    return new DeleteRequestBuilder<InjuryTreatmentTypes<T>, T>(
      this.entityApi,
      treatmentTypeIdOrEntity instanceof InjuryTreatmentTypes
        ? treatmentTypeIdOrEntity
        : { TreatmentTypeId: treatmentTypeIdOrEntity! }
    );
  }
}
