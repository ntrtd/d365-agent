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
import { HazardousMaterialRegulations } from './HazardousMaterialRegulations';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialRegulations} entity.
 */
export class HazardousMaterialRegulationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialRegulations<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialRegulations` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialRegulations` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialRegulations<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialRegulations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialRegulations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialRegulations`.
   */
  create(
    entity: HazardousMaterialRegulations<T>
  ): CreateRequestBuilder<HazardousMaterialRegulations<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialRegulations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialRegulations` entity based on its keys.
   * @param regCode Key property. See {@link HazardousMaterialRegulations.regCode}.
   * @param sequenceNumber Key property. See {@link HazardousMaterialRegulations.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialRegulations` entity based on its keys.
   */
  getByKey(
    regCode: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<HazardousMaterialRegulations<T>, T> {
    return new GetByKeyRequestBuilder<HazardousMaterialRegulations<T>, T>(
      this.entityApi,
      {
        RegCode: regCode,
        SequenceNumber: sequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialRegulations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialRegulations`.
   */
  update(
    entity: HazardousMaterialRegulations<T>
  ): UpdateRequestBuilder<HazardousMaterialRegulations<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialRegulations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialRegulations`.
   * @param regCode Key property. See {@link HazardousMaterialRegulations.regCode}.
   * @param sequenceNumber Key property. See {@link HazardousMaterialRegulations.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialRegulations`.
   */
  delete(
    regCode: string,
    sequenceNumber: number
  ): DeleteRequestBuilder<HazardousMaterialRegulations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialRegulations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialRegulations` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialRegulations<T>
  ): DeleteRequestBuilder<HazardousMaterialRegulations<T>, T>;
  delete(
    regCodeOrEntity: any,
    sequenceNumber?: number
  ): DeleteRequestBuilder<HazardousMaterialRegulations<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialRegulations<T>, T>(
      this.entityApi,
      regCodeOrEntity instanceof HazardousMaterialRegulations
        ? regCodeOrEntity
        : {
            RegCode: regCodeOrEntity!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
