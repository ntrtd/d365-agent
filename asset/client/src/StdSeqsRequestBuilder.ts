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
import { StdSeqs } from './StdSeqs';
import { RTax25StdModuleType } from './RTax25StdModuleType';

/**
 * Request builder class for operations supported on the {@link StdSeqs} entity.
 */
export class StdSeqsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StdSeqs<T>, T> {
  /**
   * Returns a request builder for querying all `StdSeqs` entities.
   * @returns A request builder for creating requests to retrieve all `StdSeqs` entities.
   */
  getAll(): GetAllRequestBuilder<StdSeqs<T>, T> {
    return new GetAllRequestBuilder<StdSeqs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StdSeqs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StdSeqs`.
   */
  create(entity: StdSeqs<T>): CreateRequestBuilder<StdSeqs<T>, T> {
    return new CreateRequestBuilder<StdSeqs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `StdSeqs` entity based on its keys.
   * @param dataAreaId Key property. See {@link StdSeqs.dataAreaId}.
   * @param sequence Key property. See {@link StdSeqs.sequence}.
   * @param appliedModule Key property. See {@link StdSeqs.appliedModule}.
   * @returns A request builder for creating requests to retrieve one `StdSeqs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sequence: DeserializedType<T, 'Edm.Int32'>,
    appliedModule: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RTax25StdModuleType'
    >
  ): GetByKeyRequestBuilder<StdSeqs<T>, T> {
    return new GetByKeyRequestBuilder<StdSeqs<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Sequence: sequence,
      AppliedModule: appliedModule
    });
  }

  /**
   * Returns a request builder for updating an entity of type `StdSeqs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StdSeqs`.
   */
  update(entity: StdSeqs<T>): UpdateRequestBuilder<StdSeqs<T>, T> {
    return new UpdateRequestBuilder<StdSeqs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `StdSeqs`.
   * @param dataAreaId Key property. See {@link StdSeqs.dataAreaId}.
   * @param sequence Key property. See {@link StdSeqs.sequence}.
   * @param appliedModule Key property. See {@link StdSeqs.appliedModule}.
   * @returns A request builder for creating requests that delete an entity of type `StdSeqs`.
   */
  delete(
    dataAreaId: string,
    sequence: number,
    appliedModule: RTax25StdModuleType
  ): DeleteRequestBuilder<StdSeqs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StdSeqs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StdSeqs` by taking the entity as a parameter.
   */
  delete(entity: StdSeqs<T>): DeleteRequestBuilder<StdSeqs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sequence?: number,
    appliedModule?: RTax25StdModuleType
  ): DeleteRequestBuilder<StdSeqs<T>, T> {
    return new DeleteRequestBuilder<StdSeqs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StdSeqs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Sequence: sequence!,
            AppliedModule: appliedModule!
          }
    );
  }
}
