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
import { CompensationStructuresDualWriteV2 } from './CompensationStructuresDualWriteV2';

/**
 * Request builder class for operations supported on the {@link CompensationStructuresDualWriteV2} entity.
 */
export class CompensationStructuresDualWriteV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationStructuresDualWriteV2<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationStructuresDualWriteV2` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationStructuresDualWriteV2` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationStructuresDualWriteV2<T>, T> {
    return new GetAllRequestBuilder<CompensationStructuresDualWriteV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationStructuresDualWriteV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationStructuresDualWriteV2`.
   */
  create(
    entity: CompensationStructuresDualWriteV2<T>
  ): CreateRequestBuilder<CompensationStructuresDualWriteV2<T>, T> {
    return new CreateRequestBuilder<CompensationStructuresDualWriteV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationStructuresDualWriteV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationStructuresDualWriteV2.dataAreaId}.
   * @param grid Key property. See {@link CompensationStructuresDualWriteV2.grid}.
   * @param levelId Key property. See {@link CompensationStructuresDualWriteV2.levelId}.
   * @param referenceSetup Key property. See {@link CompensationStructuresDualWriteV2.referenceSetup}.
   * @param referencePoint Key property. See {@link CompensationStructuresDualWriteV2.referencePoint}.
   * @returns A request builder for creating requests to retrieve one `CompensationStructuresDualWriteV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    grid: DeserializedType<T, 'Edm.String'>,
    levelId: DeserializedType<T, 'Edm.String'>,
    referenceSetup: DeserializedType<T, 'Edm.String'>,
    referencePoint: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationStructuresDualWriteV2<T>, T> {
    return new GetByKeyRequestBuilder<CompensationStructuresDualWriteV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Grid: grid,
        LevelId: levelId,
        ReferenceSetup: referenceSetup,
        ReferencePoint: referencePoint
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationStructuresDualWriteV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationStructuresDualWriteV2`.
   */
  update(
    entity: CompensationStructuresDualWriteV2<T>
  ): UpdateRequestBuilder<CompensationStructuresDualWriteV2<T>, T> {
    return new UpdateRequestBuilder<CompensationStructuresDualWriteV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationStructuresDualWriteV2`.
   * @param dataAreaId Key property. See {@link CompensationStructuresDualWriteV2.dataAreaId}.
   * @param grid Key property. See {@link CompensationStructuresDualWriteV2.grid}.
   * @param levelId Key property. See {@link CompensationStructuresDualWriteV2.levelId}.
   * @param referenceSetup Key property. See {@link CompensationStructuresDualWriteV2.referenceSetup}.
   * @param referencePoint Key property. See {@link CompensationStructuresDualWriteV2.referencePoint}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationStructuresDualWriteV2`.
   */
  delete(
    dataAreaId: string,
    grid: string,
    levelId: string,
    referenceSetup: string,
    referencePoint: string
  ): DeleteRequestBuilder<CompensationStructuresDualWriteV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationStructuresDualWriteV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationStructuresDualWriteV2` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationStructuresDualWriteV2<T>
  ): DeleteRequestBuilder<CompensationStructuresDualWriteV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    grid?: string,
    levelId?: string,
    referenceSetup?: string,
    referencePoint?: string
  ): DeleteRequestBuilder<CompensationStructuresDualWriteV2<T>, T> {
    return new DeleteRequestBuilder<CompensationStructuresDualWriteV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationStructuresDualWriteV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Grid: grid!,
            LevelId: levelId!,
            ReferenceSetup: referenceSetup!,
            ReferencePoint: referencePoint!
          }
    );
  }
}
