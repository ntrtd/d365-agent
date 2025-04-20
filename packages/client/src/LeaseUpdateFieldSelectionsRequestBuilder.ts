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
import { LeaseUpdateFieldSelections } from './LeaseUpdateFieldSelections';

/**
 * Request builder class for operations supported on the {@link LeaseUpdateFieldSelections} entity.
 */
export class LeaseUpdateFieldSelectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseUpdateFieldSelections<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseUpdateFieldSelections` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseUpdateFieldSelections` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseUpdateFieldSelections<T>, T> {
    return new GetAllRequestBuilder<LeaseUpdateFieldSelections<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseUpdateFieldSelections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseUpdateFieldSelections`.
   */
  create(
    entity: LeaseUpdateFieldSelections<T>
  ): CreateRequestBuilder<LeaseUpdateFieldSelections<T>, T> {
    return new CreateRequestBuilder<LeaseUpdateFieldSelections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseUpdateFieldSelections` entity based on its keys.
   * @param fieldId Key property. See {@link LeaseUpdateFieldSelections.fieldId}.
   * @param refTableId Key property. See {@link LeaseUpdateFieldSelections.refTableId}.
   * @returns A request builder for creating requests to retrieve one `LeaseUpdateFieldSelections` entity based on its keys.
   */
  getByKey(
    fieldId: DeserializedType<T, 'Edm.Int32'>,
    refTableId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LeaseUpdateFieldSelections<T>, T> {
    return new GetByKeyRequestBuilder<LeaseUpdateFieldSelections<T>, T>(
      this.entityApi,
      {
        FieldId: fieldId,
        RefTableId: refTableId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseUpdateFieldSelections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseUpdateFieldSelections`.
   */
  update(
    entity: LeaseUpdateFieldSelections<T>
  ): UpdateRequestBuilder<LeaseUpdateFieldSelections<T>, T> {
    return new UpdateRequestBuilder<LeaseUpdateFieldSelections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseUpdateFieldSelections`.
   * @param fieldId Key property. See {@link LeaseUpdateFieldSelections.fieldId}.
   * @param refTableId Key property. See {@link LeaseUpdateFieldSelections.refTableId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseUpdateFieldSelections`.
   */
  delete(
    fieldId: number,
    refTableId: number
  ): DeleteRequestBuilder<LeaseUpdateFieldSelections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseUpdateFieldSelections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseUpdateFieldSelections` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseUpdateFieldSelections<T>
  ): DeleteRequestBuilder<LeaseUpdateFieldSelections<T>, T>;
  delete(
    fieldIdOrEntity: any,
    refTableId?: number
  ): DeleteRequestBuilder<LeaseUpdateFieldSelections<T>, T> {
    return new DeleteRequestBuilder<LeaseUpdateFieldSelections<T>, T>(
      this.entityApi,
      fieldIdOrEntity instanceof LeaseUpdateFieldSelections
        ? fieldIdOrEntity
        : {
            FieldId: fieldIdOrEntity!,
            RefTableId: refTableId!
          }
    );
  }
}
