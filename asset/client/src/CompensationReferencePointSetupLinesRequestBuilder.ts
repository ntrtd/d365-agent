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
import { CompensationReferencePointSetupLines } from './CompensationReferencePointSetupLines';

/**
 * Request builder class for operations supported on the {@link CompensationReferencePointSetupLines} entity.
 */
export class CompensationReferencePointSetupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationReferencePointSetupLines<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationReferencePointSetupLines` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationReferencePointSetupLines` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationReferencePointSetupLines<T>, T> {
    return new GetAllRequestBuilder<CompensationReferencePointSetupLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationReferencePointSetupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationReferencePointSetupLines`.
   */
  create(
    entity: CompensationReferencePointSetupLines<T>
  ): CreateRequestBuilder<CompensationReferencePointSetupLines<T>, T> {
    return new CreateRequestBuilder<CompensationReferencePointSetupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationReferencePointSetupLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationReferencePointSetupLines.dataAreaId}.
   * @param refPointSetupId Key property. See {@link CompensationReferencePointSetupLines.refPointSetupId}.
   * @param lineNum Key property. See {@link CompensationReferencePointSetupLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `CompensationReferencePointSetupLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    refPointSetupId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CompensationReferencePointSetupLines<T>, T> {
    return new GetByKeyRequestBuilder<
      CompensationReferencePointSetupLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RefPointSetupId: refPointSetupId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationReferencePointSetupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationReferencePointSetupLines`.
   */
  update(
    entity: CompensationReferencePointSetupLines<T>
  ): UpdateRequestBuilder<CompensationReferencePointSetupLines<T>, T> {
    return new UpdateRequestBuilder<CompensationReferencePointSetupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationReferencePointSetupLines`.
   * @param dataAreaId Key property. See {@link CompensationReferencePointSetupLines.dataAreaId}.
   * @param refPointSetupId Key property. See {@link CompensationReferencePointSetupLines.refPointSetupId}.
   * @param lineNum Key property. See {@link CompensationReferencePointSetupLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationReferencePointSetupLines`.
   */
  delete(
    dataAreaId: string,
    refPointSetupId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<CompensationReferencePointSetupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationReferencePointSetupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationReferencePointSetupLines` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationReferencePointSetupLines<T>
  ): DeleteRequestBuilder<CompensationReferencePointSetupLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    refPointSetupId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<CompensationReferencePointSetupLines<T>, T> {
    return new DeleteRequestBuilder<CompensationReferencePointSetupLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationReferencePointSetupLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RefPointSetupId: refPointSetupId!,
            LineNum: lineNum!
          }
    );
  }
}
