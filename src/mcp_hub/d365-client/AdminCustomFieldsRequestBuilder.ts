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
import { AdminCustomFields } from './AdminCustomFields';

/**
 * Request builder class for operations supported on the {@link AdminCustomFields} entity.
 */
export class AdminCustomFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdminCustomFields<T>, T> {
  /**
   * Returns a request builder for querying all `AdminCustomFields` entities.
   * @returns A request builder for creating requests to retrieve all `AdminCustomFields` entities.
   */
  getAll(): GetAllRequestBuilder<AdminCustomFields<T>, T> {
    return new GetAllRequestBuilder<AdminCustomFields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdminCustomFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdminCustomFields`.
   */
  create(
    entity: AdminCustomFields<T>
  ): CreateRequestBuilder<AdminCustomFields<T>, T> {
    return new CreateRequestBuilder<AdminCustomFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdminCustomFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link AdminCustomFields.dataAreaId}.
   * @param legalEntityId Key property. See {@link AdminCustomFields.legalEntityId}.
   * @param refTableId Key property. See {@link AdminCustomFields.refTableId}.
   * @param refFieldId Key property. See {@link AdminCustomFields.refFieldId}.
   * @param methodName Key property. See {@link AdminCustomFields.methodName}.
   * @returns A request builder for creating requests to retrieve one `AdminCustomFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    refTableId: DeserializedType<T, 'Edm.Int32'>,
    refFieldId: DeserializedType<T, 'Edm.Int32'>,
    methodName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AdminCustomFields<T>, T> {
    return new GetByKeyRequestBuilder<AdminCustomFields<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LegalEntityId: legalEntityId,
      RefTableId: refTableId,
      RefFieldId: refFieldId,
      MethodName: methodName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AdminCustomFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdminCustomFields`.
   */
  update(
    entity: AdminCustomFields<T>
  ): UpdateRequestBuilder<AdminCustomFields<T>, T> {
    return new UpdateRequestBuilder<AdminCustomFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdminCustomFields`.
   * @param dataAreaId Key property. See {@link AdminCustomFields.dataAreaId}.
   * @param legalEntityId Key property. See {@link AdminCustomFields.legalEntityId}.
   * @param refTableId Key property. See {@link AdminCustomFields.refTableId}.
   * @param refFieldId Key property. See {@link AdminCustomFields.refFieldId}.
   * @param methodName Key property. See {@link AdminCustomFields.methodName}.
   * @returns A request builder for creating requests that delete an entity of type `AdminCustomFields`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    refTableId: number,
    refFieldId: number,
    methodName: string
  ): DeleteRequestBuilder<AdminCustomFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdminCustomFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdminCustomFields` by taking the entity as a parameter.
   */
  delete(
    entity: AdminCustomFields<T>
  ): DeleteRequestBuilder<AdminCustomFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    refTableId?: number,
    refFieldId?: number,
    methodName?: string
  ): DeleteRequestBuilder<AdminCustomFields<T>, T> {
    return new DeleteRequestBuilder<AdminCustomFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AdminCustomFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            RefTableId: refTableId!,
            RefFieldId: refFieldId!,
            MethodName: methodName!
          }
    );
  }
}
