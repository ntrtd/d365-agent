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
import { SalesAgreementConfirmationLines } from './SalesAgreementConfirmationLines';

/**
 * Request builder class for operations supported on the {@link SalesAgreementConfirmationLines} entity.
 */
export class SalesAgreementConfirmationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAgreementConfirmationLines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAgreementConfirmationLines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAgreementConfirmationLines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAgreementConfirmationLines<T>, T> {
    return new GetAllRequestBuilder<SalesAgreementConfirmationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesAgreementConfirmationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAgreementConfirmationLines`.
   */
  create(
    entity: SalesAgreementConfirmationLines<T>
  ): CreateRequestBuilder<SalesAgreementConfirmationLines<T>, T> {
    return new CreateRequestBuilder<SalesAgreementConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesAgreementConfirmationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAgreementConfirmationLines.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementConfirmationLines.salesAgreementId}.
   * @param confirmationNumber Key property. See {@link SalesAgreementConfirmationLines.confirmationNumber}.
   * @param lineNumber Key property. See {@link SalesAgreementConfirmationLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAgreementConfirmationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesAgreementId: DeserializedType<T, 'Edm.String'>,
    confirmationNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesAgreementConfirmationLines<T>, T> {
    return new GetByKeyRequestBuilder<SalesAgreementConfirmationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesAgreementId: salesAgreementId,
        ConfirmationNumber: confirmationNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAgreementConfirmationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAgreementConfirmationLines`.
   */
  update(
    entity: SalesAgreementConfirmationLines<T>
  ): UpdateRequestBuilder<SalesAgreementConfirmationLines<T>, T> {
    return new UpdateRequestBuilder<SalesAgreementConfirmationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementConfirmationLines`.
   * @param dataAreaId Key property. See {@link SalesAgreementConfirmationLines.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementConfirmationLines.salesAgreementId}.
   * @param confirmationNumber Key property. See {@link SalesAgreementConfirmationLines.confirmationNumber}.
   * @param lineNumber Key property. See {@link SalesAgreementConfirmationLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementConfirmationLines`.
   */
  delete(
    dataAreaId: string,
    salesAgreementId: string,
    confirmationNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesAgreementConfirmationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementConfirmationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementConfirmationLines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAgreementConfirmationLines<T>
  ): DeleteRequestBuilder<SalesAgreementConfirmationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesAgreementId?: string,
    confirmationNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesAgreementConfirmationLines<T>, T> {
    return new DeleteRequestBuilder<SalesAgreementConfirmationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAgreementConfirmationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesAgreementId: salesAgreementId!,
            ConfirmationNumber: confirmationNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
