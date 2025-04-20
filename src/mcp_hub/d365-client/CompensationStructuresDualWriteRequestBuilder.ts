/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { CompensationStructuresDualWrite } from './CompensationStructuresDualWrite';

/**
 * Request builder class for operations supported on the {@link CompensationStructuresDualWrite} entity.
 */
export class CompensationStructuresDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationStructuresDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationStructuresDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationStructuresDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationStructuresDualWrite<T>, T> {
    return new GetAllRequestBuilder<CompensationStructuresDualWrite<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationStructuresDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationStructuresDualWrite`.
   */
  create(
    entity: CompensationStructuresDualWrite<T>
  ): CreateRequestBuilder<CompensationStructuresDualWrite<T>, T> {
    return new CreateRequestBuilder<CompensationStructuresDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationStructuresDualWrite` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationStructuresDualWrite.dataAreaId}.
   * @param grid Key property. See {@link CompensationStructuresDualWrite.grid}.
   * @param levelId Key property. See {@link CompensationStructuresDualWrite.levelId}.
   * @param referencePointLineNumber Key property. See {@link CompensationStructuresDualWrite.referencePointLineNumber}.
   * @param referenceSetup Key property. See {@link CompensationStructuresDualWrite.referenceSetup}.
   * @returns A request builder for creating requests to retrieve one `CompensationStructuresDualWrite` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    grid: DeserializedType<T, 'Edm.String'>,
    levelId: DeserializedType<T, 'Edm.String'>,
    referencePointLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    referenceSetup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationStructuresDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<CompensationStructuresDualWrite<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Grid: grid,
        LevelId: levelId,
        ReferencePointLineNumber: referencePointLineNumber,
        ReferenceSetup: referenceSetup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationStructuresDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationStructuresDualWrite`.
   */
  update(
    entity: CompensationStructuresDualWrite<T>
  ): UpdateRequestBuilder<CompensationStructuresDualWrite<T>, T> {
    return new UpdateRequestBuilder<CompensationStructuresDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationStructuresDualWrite`.
   * @param dataAreaId Key property. See {@link CompensationStructuresDualWrite.dataAreaId}.
   * @param grid Key property. See {@link CompensationStructuresDualWrite.grid}.
   * @param levelId Key property. See {@link CompensationStructuresDualWrite.levelId}.
   * @param referencePointLineNumber Key property. See {@link CompensationStructuresDualWrite.referencePointLineNumber}.
   * @param referenceSetup Key property. See {@link CompensationStructuresDualWrite.referenceSetup}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationStructuresDualWrite`.
   */
  delete(
    dataAreaId: string,
    grid: string,
    levelId: string,
    referencePointLineNumber: BigNumber,
    referenceSetup: string
  ): DeleteRequestBuilder<CompensationStructuresDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationStructuresDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationStructuresDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationStructuresDualWrite<T>
  ): DeleteRequestBuilder<CompensationStructuresDualWrite<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    grid?: string,
    levelId?: string,
    referencePointLineNumber?: BigNumber,
    referenceSetup?: string
  ): DeleteRequestBuilder<CompensationStructuresDualWrite<T>, T> {
    return new DeleteRequestBuilder<CompensationStructuresDualWrite<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationStructuresDualWrite
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Grid: grid!,
            LevelId: levelId!,
            ReferencePointLineNumber: referencePointLineNumber!,
            ReferenceSetup: referenceSetup!
          }
    );
  }
}
