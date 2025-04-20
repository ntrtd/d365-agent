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
import { SubBillDeferralEventTemplateLines } from './SubBillDeferralEventTemplateLines';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralEventTemplateLines} entity.
 */
export class SubBillDeferralEventTemplateLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralEventTemplateLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralEventTemplateLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralEventTemplateLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralEventTemplateLines<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralEventTemplateLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralEventTemplateLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralEventTemplateLines`.
   */
  create(
    entity: SubBillDeferralEventTemplateLines<T>
  ): CreateRequestBuilder<SubBillDeferralEventTemplateLines<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralEventTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralEventTemplateLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralEventTemplateLines.dataAreaId}.
   * @param template Key property. See {@link SubBillDeferralEventTemplateLines.template}.
   * @param lineNum Key property. See {@link SubBillDeferralEventTemplateLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralEventTemplateLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    template: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillDeferralEventTemplateLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralEventTemplateLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Template: template,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralEventTemplateLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralEventTemplateLines`.
   */
  update(
    entity: SubBillDeferralEventTemplateLines<T>
  ): UpdateRequestBuilder<SubBillDeferralEventTemplateLines<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralEventTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralEventTemplateLines`.
   * @param dataAreaId Key property. See {@link SubBillDeferralEventTemplateLines.dataAreaId}.
   * @param template Key property. See {@link SubBillDeferralEventTemplateLines.template}.
   * @param lineNum Key property. See {@link SubBillDeferralEventTemplateLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralEventTemplateLines`.
   */
  delete(
    dataAreaId: string,
    template: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillDeferralEventTemplateLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralEventTemplateLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralEventTemplateLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralEventTemplateLines<T>
  ): DeleteRequestBuilder<SubBillDeferralEventTemplateLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    template?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillDeferralEventTemplateLines<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralEventTemplateLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralEventTemplateLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Template: template!,
            LineNum: lineNum!
          }
    );
  }
}
