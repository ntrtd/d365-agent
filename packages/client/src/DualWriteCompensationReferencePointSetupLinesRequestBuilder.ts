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
import { DualWriteCompensationReferencePointSetupLines } from './DualWriteCompensationReferencePointSetupLines';

/**
 * Request builder class for operations supported on the {@link DualWriteCompensationReferencePointSetupLines} entity.
 */
export class DualWriteCompensationReferencePointSetupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteCompensationReferencePointSetupLines<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteCompensationReferencePointSetupLines` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteCompensationReferencePointSetupLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    DualWriteCompensationReferencePointSetupLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      DualWriteCompensationReferencePointSetupLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DualWriteCompensationReferencePointSetupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteCompensationReferencePointSetupLines`.
   */
  create(
    entity: DualWriteCompensationReferencePointSetupLines<T>
  ): CreateRequestBuilder<DualWriteCompensationReferencePointSetupLines<T>, T> {
    return new CreateRequestBuilder<
      DualWriteCompensationReferencePointSetupLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DualWriteCompensationReferencePointSetupLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteCompensationReferencePointSetupLines.dataAreaId}.
   * @param refPointSetupId Key property. See {@link DualWriteCompensationReferencePointSetupLines.refPointSetupId}.
   * @param refPointId Key property. See {@link DualWriteCompensationReferencePointSetupLines.refPointId}.
   * @returns A request builder for creating requests to retrieve one `DualWriteCompensationReferencePointSetupLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    refPointSetupId: DeserializedType<T, 'Edm.String'>,
    refPointId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    DualWriteCompensationReferencePointSetupLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      DualWriteCompensationReferencePointSetupLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RefPointSetupId: refPointSetupId,
      RefPointId: refPointId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteCompensationReferencePointSetupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteCompensationReferencePointSetupLines`.
   */
  update(
    entity: DualWriteCompensationReferencePointSetupLines<T>
  ): UpdateRequestBuilder<DualWriteCompensationReferencePointSetupLines<T>, T> {
    return new UpdateRequestBuilder<
      DualWriteCompensationReferencePointSetupLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteCompensationReferencePointSetupLines`.
   * @param dataAreaId Key property. See {@link DualWriteCompensationReferencePointSetupLines.dataAreaId}.
   * @param refPointSetupId Key property. See {@link DualWriteCompensationReferencePointSetupLines.refPointSetupId}.
   * @param refPointId Key property. See {@link DualWriteCompensationReferencePointSetupLines.refPointId}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteCompensationReferencePointSetupLines`.
   */
  delete(
    dataAreaId: string,
    refPointSetupId: string,
    refPointId: string
  ): DeleteRequestBuilder<DualWriteCompensationReferencePointSetupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteCompensationReferencePointSetupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteCompensationReferencePointSetupLines` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteCompensationReferencePointSetupLines<T>
  ): DeleteRequestBuilder<DualWriteCompensationReferencePointSetupLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    refPointSetupId?: string,
    refPointId?: string
  ): DeleteRequestBuilder<DualWriteCompensationReferencePointSetupLines<T>, T> {
    return new DeleteRequestBuilder<
      DualWriteCompensationReferencePointSetupLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      DualWriteCompensationReferencePointSetupLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RefPointSetupId: refPointSetupId!,
            RefPointId: refPointId!
          }
    );
  }
}
