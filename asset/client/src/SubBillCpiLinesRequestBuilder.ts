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
import { SubBillCpiLines } from './SubBillCpiLines';

/**
 * Request builder class for operations supported on the {@link SubBillCpiLines} entity.
 */
export class SubBillCpiLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillCpiLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillCpiLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillCpiLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillCpiLines<T>, T> {
    return new GetAllRequestBuilder<SubBillCpiLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillCpiLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillCpiLines`.
   */
  create(
    entity: SubBillCpiLines<T>
  ): CreateRequestBuilder<SubBillCpiLines<T>, T> {
    return new CreateRequestBuilder<SubBillCpiLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillCpiLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillCpiLines.dataAreaId}.
   * @param cpiSchedule Key property. See {@link SubBillCpiLines.cpiSchedule}.
   * @param lineNum Key property. See {@link SubBillCpiLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillCpiLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cpiSchedule: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillCpiLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillCpiLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CPISchedule: cpiSchedule,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillCpiLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillCpiLines`.
   */
  update(
    entity: SubBillCpiLines<T>
  ): UpdateRequestBuilder<SubBillCpiLines<T>, T> {
    return new UpdateRequestBuilder<SubBillCpiLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillCpiLines`.
   * @param dataAreaId Key property. See {@link SubBillCpiLines.dataAreaId}.
   * @param cpiSchedule Key property. See {@link SubBillCpiLines.cpiSchedule}.
   * @param lineNum Key property. See {@link SubBillCpiLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillCpiLines`.
   */
  delete(
    dataAreaId: string,
    cpiSchedule: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillCpiLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillCpiLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillCpiLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillCpiLines<T>
  ): DeleteRequestBuilder<SubBillCpiLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cpiSchedule?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillCpiLines<T>, T> {
    return new DeleteRequestBuilder<SubBillCpiLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillCpiLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CPISchedule: cpiSchedule!,
            LineNum: lineNum!
          }
    );
  }
}
