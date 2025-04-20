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
import { SiteGateEntryLines } from './SiteGateEntryLines';

/**
 * Request builder class for operations supported on the {@link SiteGateEntryLines} entity.
 */
export class SiteGateEntryLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SiteGateEntryLines<T>, T> {
  /**
   * Returns a request builder for querying all `SiteGateEntryLines` entities.
   * @returns A request builder for creating requests to retrieve all `SiteGateEntryLines` entities.
   */
  getAll(): GetAllRequestBuilder<SiteGateEntryLines<T>, T> {
    return new GetAllRequestBuilder<SiteGateEntryLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SiteGateEntryLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SiteGateEntryLines`.
   */
  create(
    entity: SiteGateEntryLines<T>
  ): CreateRequestBuilder<SiteGateEntryLines<T>, T> {
    return new CreateRequestBuilder<SiteGateEntryLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SiteGateEntryLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SiteGateEntryLines.dataAreaId}.
   * @param gateEntry Key property. See {@link SiteGateEntryLines.gateEntry}.
   * @param lineNum Key property. See {@link SiteGateEntryLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SiteGateEntryLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    gateEntry: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SiteGateEntryLines<T>, T> {
    return new GetByKeyRequestBuilder<SiteGateEntryLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GateEntry: gateEntry,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SiteGateEntryLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SiteGateEntryLines`.
   */
  update(
    entity: SiteGateEntryLines<T>
  ): UpdateRequestBuilder<SiteGateEntryLines<T>, T> {
    return new UpdateRequestBuilder<SiteGateEntryLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SiteGateEntryLines`.
   * @param dataAreaId Key property. See {@link SiteGateEntryLines.dataAreaId}.
   * @param gateEntry Key property. See {@link SiteGateEntryLines.gateEntry}.
   * @param lineNum Key property. See {@link SiteGateEntryLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SiteGateEntryLines`.
   */
  delete(
    dataAreaId: string,
    gateEntry: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SiteGateEntryLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SiteGateEntryLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SiteGateEntryLines` by taking the entity as a parameter.
   */
  delete(
    entity: SiteGateEntryLines<T>
  ): DeleteRequestBuilder<SiteGateEntryLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    gateEntry?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SiteGateEntryLines<T>, T> {
    return new DeleteRequestBuilder<SiteGateEntryLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SiteGateEntryLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GateEntry: gateEntry!,
            LineNum: lineNum!
          }
    );
  }
}
