/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorPaymentMethodSpecifications } from './VendorPaymentMethodSpecifications';
import { VendorPaymentMethodSpecificationsRequestBuilder } from './VendorPaymentMethodSpecificationsRequestBuilder';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { VendorPaymentMethodsApi } from './VendorPaymentMethodsApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { ValidationControlBr } from './ValidationControlBr';
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
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorPaymentMethodSpecificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorPaymentMethodSpecifications<DeSerializersT>, DeSerializersT>
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
  ): VendorPaymentMethodSpecificationsApi<DeSerializersT> {
    return new VendorPaymentMethodSpecificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorPaymentMethodSpecifications<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD: OneToOneLink<
      VendorPaymentMethodSpecifications<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorPaymentMethodSpecifications<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementsApi<DeSerializersT>,
      VendorPaymentMethodsApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[0]
      ),
      VENDOR_PAYMENT_METHOD: new OneToOneLink(
        'VendorPaymentMethod',
        this,
        linkedApis[1]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = VendorPaymentMethodSpecifications;

  requestBuilder(): VendorPaymentMethodSpecificationsRequestBuilder<DeSerializersT> {
    return new VendorPaymentMethodSpecificationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendorPaymentMethodSpecifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorPaymentMethodSpecifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorPaymentMethodSpecifications<DeSerializersT>,
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
    typeof VendorPaymentMethodSpecifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorPaymentMethodSpecifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELECTRONIC_PAYMENT_TYPE: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPEC_PARAMETERS: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_SEGMENT: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_WAY: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_NAME: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_VALIDATION_CONTROL: EnumField<
      VendorPaymentMethodSpecifications<DeSerializers>,
      DeSerializersT,
      ValidationControlBr,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorPaymentMethodSpecifications<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD: OneToOneLink<
      VendorPaymentMethodSpecifications<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorPaymentMethodSpecifications<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorPaymentMethodSpecifications<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentMethodName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link electronicPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ElectronicPaymentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specParameters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPEC_PARAMETERS: fieldBuilder.buildEdmTypeField(
          'SpecParameters',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicPaymentSegment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_SEGMENT: fieldBuilder.buildEdmTypeField(
          'ElectronicPaymentSegment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicPaymentWay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_WAY: fieldBuilder.buildEdmTypeField(
          'ElectronicPaymentWay',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link className} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ClassName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicPaymentValidationControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_VALIDATION_CONTROL: fieldBuilder.buildEnumField(
          'ElectronicPaymentValidationControl',
          ValidationControlBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorPaymentMethodSpecifications)
      };
    }

    return this._schema;
  }
}
