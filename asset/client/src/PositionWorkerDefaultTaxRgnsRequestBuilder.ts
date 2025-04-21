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
import { PositionWorkerDefaultTaxRgns } from './PositionWorkerDefaultTaxRgns';

/**
 * Request builder class for operations supported on the {@link PositionWorkerDefaultTaxRgns} entity.
 */
export class PositionWorkerDefaultTaxRgnsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionWorkerDefaultTaxRgns<T>, T> {
  /**
   * Returns a request builder for querying all `PositionWorkerDefaultTaxRgns` entities.
   * @returns A request builder for creating requests to retrieve all `PositionWorkerDefaultTaxRgns` entities.
   */
  getAll(): GetAllRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T> {
    return new GetAllRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PositionWorkerDefaultTaxRgns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionWorkerDefaultTaxRgns`.
   */
  create(
    entity: PositionWorkerDefaultTaxRgns<T>
  ): CreateRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T> {
    return new CreateRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionWorkerDefaultTaxRgns` entity based on its keys.
   * @param personnelNumber Key property. See {@link PositionWorkerDefaultTaxRgns.personnelNumber}.
   * @param positionId Key property. See {@link PositionWorkerDefaultTaxRgns.positionId}.
   * @returns A request builder for creating requests to retrieve one `PositionWorkerDefaultTaxRgns` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T> {
    return new GetByKeyRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        PositionId: positionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionWorkerDefaultTaxRgns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionWorkerDefaultTaxRgns`.
   */
  update(
    entity: PositionWorkerDefaultTaxRgns<T>
  ): UpdateRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T> {
    return new UpdateRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionWorkerDefaultTaxRgns`.
   * @param personnelNumber Key property. See {@link PositionWorkerDefaultTaxRgns.personnelNumber}.
   * @param positionId Key property. See {@link PositionWorkerDefaultTaxRgns.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `PositionWorkerDefaultTaxRgns`.
   */
  delete(
    personnelNumber: string,
    positionId: string
  ): DeleteRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionWorkerDefaultTaxRgns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionWorkerDefaultTaxRgns` by taking the entity as a parameter.
   */
  delete(
    entity: PositionWorkerDefaultTaxRgns<T>
  ): DeleteRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    positionId?: string
  ): DeleteRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T> {
    return new DeleteRequestBuilder<PositionWorkerDefaultTaxRgns<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PositionWorkerDefaultTaxRgns
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            PositionId: positionId!
          }
    );
  }
}
