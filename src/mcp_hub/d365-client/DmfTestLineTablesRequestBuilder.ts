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
import { DmfTestLineTables } from './DmfTestLineTables';

/**
 * Request builder class for operations supported on the {@link DmfTestLineTables} entity.
 */
export class DmfTestLineTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DmfTestLineTables<T>, T> {
  /**
   * Returns a request builder for querying all `DmfTestLineTables` entities.
   * @returns A request builder for creating requests to retrieve all `DmfTestLineTables` entities.
   */
  getAll(): GetAllRequestBuilder<DmfTestLineTables<T>, T> {
    return new GetAllRequestBuilder<DmfTestLineTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DmfTestLineTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DmfTestLineTables`.
   */
  create(
    entity: DmfTestLineTables<T>
  ): CreateRequestBuilder<DmfTestLineTables<T>, T> {
    return new CreateRequestBuilder<DmfTestLineTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DmfTestLineTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DmfTestLineTables.dataAreaId}.
   * @param headerId Key property. See {@link DmfTestLineTables.headerId}.
   * @param lineNumber Key property. See {@link DmfTestLineTables.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `DmfTestLineTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<DmfTestLineTables<T>, T> {
    return new GetByKeyRequestBuilder<DmfTestLineTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      HeaderId: headerId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DmfTestLineTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DmfTestLineTables`.
   */
  update(
    entity: DmfTestLineTables<T>
  ): UpdateRequestBuilder<DmfTestLineTables<T>, T> {
    return new UpdateRequestBuilder<DmfTestLineTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DmfTestLineTables`.
   * @param dataAreaId Key property. See {@link DmfTestLineTables.dataAreaId}.
   * @param headerId Key property. See {@link DmfTestLineTables.headerId}.
   * @param lineNumber Key property. See {@link DmfTestLineTables.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DmfTestLineTables`.
   */
  delete(
    dataAreaId: string,
    headerId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<DmfTestLineTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DmfTestLineTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DmfTestLineTables` by taking the entity as a parameter.
   */
  delete(
    entity: DmfTestLineTables<T>
  ): DeleteRequestBuilder<DmfTestLineTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<DmfTestLineTables<T>, T> {
    return new DeleteRequestBuilder<DmfTestLineTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DmfTestLineTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderId: headerId!,
            LineNumber: lineNumber!
          }
    );
  }
}
