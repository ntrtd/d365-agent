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
import { AgreementLineTransTaxInformations } from './AgreementLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link AgreementLineTransTaxInformations} entity.
 */
export class AgreementLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AgreementLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `AgreementLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `AgreementLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<AgreementLineTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<AgreementLineTransTaxInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AgreementLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AgreementLineTransTaxInformations`.
   */
  create(
    entity: AgreementLineTransTaxInformations<T>
  ): CreateRequestBuilder<AgreementLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<AgreementLineTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AgreementLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AgreementLineTransTaxInformations.dataAreaId}.
   * @param agreement Key property. See {@link AgreementLineTransTaxInformations.agreement}.
   * @param lineNumber Key property. See {@link AgreementLineTransTaxInformations.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AgreementLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agreement: DeserializedType<T, 'Edm.Int64'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AgreementLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<AgreementLineTransTaxInformations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Agreement: agreement,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AgreementLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AgreementLineTransTaxInformations`.
   */
  update(
    entity: AgreementLineTransTaxInformations<T>
  ): UpdateRequestBuilder<AgreementLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<AgreementLineTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AgreementLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link AgreementLineTransTaxInformations.dataAreaId}.
   * @param agreement Key property. See {@link AgreementLineTransTaxInformations.agreement}.
   * @param lineNumber Key property. See {@link AgreementLineTransTaxInformations.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AgreementLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    agreement: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AgreementLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AgreementLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AgreementLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: AgreementLineTransTaxInformations<T>
  ): DeleteRequestBuilder<AgreementLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agreement?: BigNumber,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AgreementLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<AgreementLineTransTaxInformations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AgreementLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Agreement: agreement!,
            LineNumber: lineNumber!
          }
    );
  }
}
