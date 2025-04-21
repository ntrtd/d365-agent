/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseRequisitionBusinessJustifications } from './PurchaseRequisitionBusinessJustifications';
import { PurchaseRequisitionBusinessJustificationsRequestBuilder } from './PurchaseRequisitionBusinessJustificationsRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseRequisitionBusinessJustificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PurchaseRequisitionBusinessJustifications<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PurchaseRequisitionBusinessJustificationsApi<DeSerializersT> {
    return new PurchaseRequisitionBusinessJustificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchaseRequisitionBusinessJustifications;

  requestBuilder(): PurchaseRequisitionBusinessJustificationsRequestBuilder<DeSerializersT> {
    return new PurchaseRequisitionBusinessJustificationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseRequisitionBusinessJustifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseRequisitionBusinessJustifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseRequisitionBusinessJustifications<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PurchaseRequisitionBusinessJustifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseRequisitionBusinessJustifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_REQUISITION_BUSINESS_JUSTIFICATION_CODE: OrderableEdmTypeField<
      PurchaseRequisitionBusinessJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JUSTIFICATION_DESCRIPTION: OrderableEdmTypeField<
      PurchaseRequisitionBusinessJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      PurchaseRequisitionBusinessJustifications<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link purchaseRequisitionBusinessJustificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REQUISITION_BUSINESS_JUSTIFICATION_CODE:
          fieldBuilder.buildEdmTypeField(
            'PurchaseRequisitionBusinessJustificationCode',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link justificationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JUSTIFICATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JustificationDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          PurchaseRequisitionBusinessJustifications
        )
      };
    }

    return this._schema;
  }
}
