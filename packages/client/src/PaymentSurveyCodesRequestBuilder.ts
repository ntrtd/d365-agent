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
import { PaymentSurveyCodes } from './PaymentSurveyCodes';

/**
 * Request builder class for operations supported on the {@link PaymentSurveyCodes} entity.
 */
export class PaymentSurveyCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentSurveyCodes<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentSurveyCodes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentSurveyCodes` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentSurveyCodes<T>, T> {
    return new GetAllRequestBuilder<PaymentSurveyCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentSurveyCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentSurveyCodes`.
   */
  create(
    entity: PaymentSurveyCodes<T>
  ): CreateRequestBuilder<PaymentSurveyCodes<T>, T> {
    return new CreateRequestBuilder<PaymentSurveyCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentSurveyCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentSurveyCodes.dataAreaId}.
   * @param surveyCode Key property. See {@link PaymentSurveyCodes.surveyCode}.
   * @param centralBankPurposeCode Key property. See {@link PaymentSurveyCodes.centralBankPurposeCode}.
   * @returns A request builder for creating requests to retrieve one `PaymentSurveyCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    surveyCode: DeserializedType<T, 'Edm.String'>,
    centralBankPurposeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentSurveyCodes<T>, T> {
    return new GetByKeyRequestBuilder<PaymentSurveyCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SurveyCode: surveyCode,
        CentralBankPurposeCode: centralBankPurposeCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentSurveyCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentSurveyCodes`.
   */
  update(
    entity: PaymentSurveyCodes<T>
  ): UpdateRequestBuilder<PaymentSurveyCodes<T>, T> {
    return new UpdateRequestBuilder<PaymentSurveyCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentSurveyCodes`.
   * @param dataAreaId Key property. See {@link PaymentSurveyCodes.dataAreaId}.
   * @param surveyCode Key property. See {@link PaymentSurveyCodes.surveyCode}.
   * @param centralBankPurposeCode Key property. See {@link PaymentSurveyCodes.centralBankPurposeCode}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentSurveyCodes`.
   */
  delete(
    dataAreaId: string,
    surveyCode: string,
    centralBankPurposeCode: string
  ): DeleteRequestBuilder<PaymentSurveyCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentSurveyCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentSurveyCodes` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentSurveyCodes<T>
  ): DeleteRequestBuilder<PaymentSurveyCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    surveyCode?: string,
    centralBankPurposeCode?: string
  ): DeleteRequestBuilder<PaymentSurveyCodes<T>, T> {
    return new DeleteRequestBuilder<PaymentSurveyCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentSurveyCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SurveyCode: surveyCode!,
            CentralBankPurposeCode: centralBankPurposeCode!
          }
    );
  }
}
