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
import { VivaIntEssEmploymentLegals } from './VivaIntEssEmploymentLegals';

/**
 * Request builder class for operations supported on the {@link VivaIntEssEmploymentLegals} entity.
 */
export class VivaIntEssEmploymentLegalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VivaIntEssEmploymentLegals<T>, T> {
  /**
   * Returns a request builder for querying all `VivaIntEssEmploymentLegals` entities.
   * @returns A request builder for creating requests to retrieve all `VivaIntEssEmploymentLegals` entities.
   */
  getAll(): GetAllRequestBuilder<VivaIntEssEmploymentLegals<T>, T> {
    return new GetAllRequestBuilder<VivaIntEssEmploymentLegals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VivaIntEssEmploymentLegals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VivaIntEssEmploymentLegals`.
   */
  create(
    entity: VivaIntEssEmploymentLegals<T>
  ): CreateRequestBuilder<VivaIntEssEmploymentLegals<T>, T> {
    return new CreateRequestBuilder<VivaIntEssEmploymentLegals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VivaIntEssEmploymentLegals` entity based on its keys.
   * @param personnelNumber Key property. See {@link VivaIntEssEmploymentLegals.personnelNumber}.
   * @param validFrom Key property. See {@link VivaIntEssEmploymentLegals.validFrom}.
   * @returns A request builder for creating requests to retrieve one `VivaIntEssEmploymentLegals` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<VivaIntEssEmploymentLegals<T>, T> {
    return new GetByKeyRequestBuilder<VivaIntEssEmploymentLegals<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VivaIntEssEmploymentLegals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VivaIntEssEmploymentLegals`.
   */
  update(
    entity: VivaIntEssEmploymentLegals<T>
  ): UpdateRequestBuilder<VivaIntEssEmploymentLegals<T>, T> {
    return new UpdateRequestBuilder<VivaIntEssEmploymentLegals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VivaIntEssEmploymentLegals`.
   * @param personnelNumber Key property. See {@link VivaIntEssEmploymentLegals.personnelNumber}.
   * @param validFrom Key property. See {@link VivaIntEssEmploymentLegals.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `VivaIntEssEmploymentLegals`.
   */
  delete(
    personnelNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<VivaIntEssEmploymentLegals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VivaIntEssEmploymentLegals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VivaIntEssEmploymentLegals` by taking the entity as a parameter.
   */
  delete(
    entity: VivaIntEssEmploymentLegals<T>
  ): DeleteRequestBuilder<VivaIntEssEmploymentLegals<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<VivaIntEssEmploymentLegals<T>, T> {
    return new DeleteRequestBuilder<VivaIntEssEmploymentLegals<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof VivaIntEssEmploymentLegals
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
