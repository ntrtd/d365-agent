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
import { ConfiguratorLayoutFields } from './ConfiguratorLayoutFields';

/**
 * Request builder class for operations supported on the {@link ConfiguratorLayoutFields} entity.
 */
export class ConfiguratorLayoutFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorLayoutFields<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorLayoutFields` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorLayoutFields` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorLayoutFields<T>, T> {
    return new GetAllRequestBuilder<ConfiguratorLayoutFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConfiguratorLayoutFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorLayoutFields`.
   */
  create(
    entity: ConfiguratorLayoutFields<T>
  ): CreateRequestBuilder<ConfiguratorLayoutFields<T>, T> {
    return new CreateRequestBuilder<ConfiguratorLayoutFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorLayoutFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorLayoutFields.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ConfiguratorLayoutFields.layoutGroupId}.
   * @param lineNumber Key property. See {@link ConfiguratorLayoutFields.lineNumber}.
   * @param fieldNumber Key property. See {@link ConfiguratorLayoutFields.fieldNumber}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorLayoutFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutGroupId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    fieldNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ConfiguratorLayoutFields<T>, T> {
    return new GetByKeyRequestBuilder<ConfiguratorLayoutFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LayoutGroupId: layoutGroupId,
        LineNumber: lineNumber,
        FieldNumber: fieldNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorLayoutFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorLayoutFields`.
   */
  update(
    entity: ConfiguratorLayoutFields<T>
  ): UpdateRequestBuilder<ConfiguratorLayoutFields<T>, T> {
    return new UpdateRequestBuilder<ConfiguratorLayoutFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorLayoutFields`.
   * @param dataAreaId Key property. See {@link ConfiguratorLayoutFields.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ConfiguratorLayoutFields.layoutGroupId}.
   * @param lineNumber Key property. See {@link ConfiguratorLayoutFields.lineNumber}.
   * @param fieldNumber Key property. See {@link ConfiguratorLayoutFields.fieldNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorLayoutFields`.
   */
  delete(
    dataAreaId: string,
    layoutGroupId: string,
    lineNumber: BigNumber,
    fieldNumber: BigNumber
  ): DeleteRequestBuilder<ConfiguratorLayoutFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorLayoutFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorLayoutFields` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorLayoutFields<T>
  ): DeleteRequestBuilder<ConfiguratorLayoutFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutGroupId?: string,
    lineNumber?: BigNumber,
    fieldNumber?: BigNumber
  ): DeleteRequestBuilder<ConfiguratorLayoutFields<T>, T> {
    return new DeleteRequestBuilder<ConfiguratorLayoutFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorLayoutFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutGroupId: layoutGroupId!,
            LineNumber: lineNumber!,
            FieldNumber: fieldNumber!
          }
    );
  }
}
