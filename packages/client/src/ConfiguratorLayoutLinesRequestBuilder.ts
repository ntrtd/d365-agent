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
import { ConfiguratorLayoutLines } from './ConfiguratorLayoutLines';

/**
 * Request builder class for operations supported on the {@link ConfiguratorLayoutLines} entity.
 */
export class ConfiguratorLayoutLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorLayoutLines<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorLayoutLines` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorLayoutLines` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorLayoutLines<T>, T> {
    return new GetAllRequestBuilder<ConfiguratorLayoutLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConfiguratorLayoutLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorLayoutLines`.
   */
  create(
    entity: ConfiguratorLayoutLines<T>
  ): CreateRequestBuilder<ConfiguratorLayoutLines<T>, T> {
    return new CreateRequestBuilder<ConfiguratorLayoutLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorLayoutLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorLayoutLines.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ConfiguratorLayoutLines.layoutGroupId}.
   * @param lineNumber Key property. See {@link ConfiguratorLayoutLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorLayoutLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutGroupId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ConfiguratorLayoutLines<T>, T> {
    return new GetByKeyRequestBuilder<ConfiguratorLayoutLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LayoutGroupId: layoutGroupId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorLayoutLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorLayoutLines`.
   */
  update(
    entity: ConfiguratorLayoutLines<T>
  ): UpdateRequestBuilder<ConfiguratorLayoutLines<T>, T> {
    return new UpdateRequestBuilder<ConfiguratorLayoutLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorLayoutLines`.
   * @param dataAreaId Key property. See {@link ConfiguratorLayoutLines.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ConfiguratorLayoutLines.layoutGroupId}.
   * @param lineNumber Key property. See {@link ConfiguratorLayoutLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorLayoutLines`.
   */
  delete(
    dataAreaId: string,
    layoutGroupId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ConfiguratorLayoutLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorLayoutLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorLayoutLines` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorLayoutLines<T>
  ): DeleteRequestBuilder<ConfiguratorLayoutLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutGroupId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ConfiguratorLayoutLines<T>, T> {
    return new DeleteRequestBuilder<ConfiguratorLayoutLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorLayoutLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutGroupId: layoutGroupId!,
            LineNumber: lineNumber!
          }
    );
  }
}
